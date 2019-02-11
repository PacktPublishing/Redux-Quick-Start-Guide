const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const { generateToken } = require('../helpers/jwt');

module.exports = (mongoose, mongooseDelete) => {
  const Schema = new mongoose.Schema(
    {
      email: {
        type: String,
        trim: true,
        unique: true,
      },
      username: String,
      password: String,
      loginKey: String,
      secondaryEmail: String,
      active: {
        type: Boolean,
        default: false,
      },
      name: String,
      telecom: [
        {
          use: String,
          rank: Number,
          value: String,
          system: String,
          period: String,
        },
      ],
      birthDate: Date,
      gender: {
        type: String,
        default: 'other',
        enum: ['male', 'female', 'other'],
      },
      role: {
        type: String,
        default: 'user',
        enum: ['user', 'practitioner', 'patient', 'admin'],
      },
      address: [
        {
          use: String,
          type: String,
          text: String,
          line: String,
          city: String,
          district: String,
          state: String,
          postalCode: String,
          country: String,
          period: String,
        },
      ],
      photo: String,
      language: String,
      preferredLanguage: String,
      maritalStatus: {
        type: String,
        enum: ['married', 'unmarried', 'divorced', 'separated', 'widow'],
      },
      qualifications: [String],
    },
    {
      timestamps: true,
    },
  );

  const requiredFields = ['email', 'password', 'name'];
  const publicFields = [
    'id',
    'email',
    'username',
    'secondaryEmail',
    'active',
    'name',
    'telecom',
    'birthDate',
    'gender',
    'role',
    'address',
    'photo',
    'language',
    'maritalStatus',
    'qualifications',
    'preferredLanguage',
    'managingOrganization',
  ];

  const permitFields = [
    'email',
    'username',
    'password',
    'secondaryEmail',
    'active',
    'name',
    'role',
    'telecom',
    'birthDate',
    'gender',
    'address',
    'photo',
    'language',
    'maritalStatus',
    'qualifications',
    'preferredLanguage',
    'managingOrganization',
  ];

  // eslint-disable-next-line func-names
  Schema.methods.toJson = function(extra = {}) {
    return publicFields.reduce(
      (obj, field) => ({ ...obj, [field]: this[field], id: this._id }),
      extra,
    );
  };

  // eslint-disable-next-line func-names
  Schema.statics.getAll = function(args, others = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const queryWhere = { ...others, deleted: [false, null] };
        const { limit = 10, page = 1 } = args || {};
        const query = { limit: Math.abs(parseInt(limit, 10) || 10) };
        const currentPage = Math.abs((parseInt(page, 10) || 1) - 1);
        const count = await this.count(queryWhere);
        query.skip = query.limit * currentPage;

        this.find(queryWhere, publicFields.join(' '), {
          sort: { createdAt: 'desc' },
          limit: query.limit,
          skip: query.skip,
        })
          .then(users =>
            resolve({
              count,
              currentPage,
              rows: users.map(item => item.toJson()),
              totalPage: Math.ceil(count / query.limit),
            }),
          )
          .catch(error => reject(error));
      } catch (e) {
        reject(e);
      }
    });
  };

  // eslint-disable-next-line func-names
  Schema.statics.authenticate = function(params = {}) {
    return new Promise((resolve, reject) => {
      try {
        const emptries = ['email', 'password'].filter(key =>
          [undefined].includes(params[key]),
        );

        if (emptries.length) {
          throw emptries.reduce(
            (obj, key) => ({
              ...obj,
              [key]: `${key.humanize()} can't be blank`,
            }),
            {},
          );
        }

        this.findOne({ email: params.email, deleted: [false, null] }).then(
          user => {
            if (!user || !bcrypt.compareSync(params.password, user.password)) {
              reject(
                new Error('Authentication failed. Invalid user or password.'),
              );
            } else {
              resolve(
                user.toJson({
                  token: generateToken({ loginKey: user.loginKey }),
                }),
              );
            }
          },
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // eslint-disable-next-line func-names
  Schema.statics.getBy = function(id) {
    return new Promise((resolve, reject) => {
      try {
        this.findOne({ _id: id })
          .then(user => resolve(user))
          .catch(error => reject(error));
      } catch (e) {
        reject(e);
      }
    });
  };

  // eslint-disable-next-line func-names
  Schema.statics.authUser = function(id) {
    return new Promise((resolve, reject) => {
      try {
        this.findOne({ _id: id })
          .then(user => {
            resolve(
              user.toJson({
                token: generateToken({ loginKey: user.loginKey }),
              }),
            );
          })
          .catch(error => reject(error));
      } catch (e) {
        reject(e);
      }
    });
  };

  // eslint-disable-next-line func-names
  Schema.statics.createData = function(
    params = {},
    extra = {},
    isAdmin = false,
  ) {
    return new Promise((resolve, reject) => {
      try {
        const permitParams = permitFields.reduce(
          (obj, key) =>
            params[key] === undefined ? obj : { ...obj, [key]: params[key] },
          { ...extra },
        );

        const emptries = [...requiredFields, 'confirmPassword'].filter(key =>
          [undefined].includes(params[key]),
        );

        if (emptries.length) {
          throw emptries.reduce(
            (obj, key) => ({
              ...obj,
              [key]: `${key.humanize()} can't be blank`,
            }),
            {},
          );
        }

        if (params.confirmPassword !== params.password) {
          throw Object({
            confirmPassword: 'Confirm password need to map password',
          });
        }

        if (!isAdmin) {
          delete permitParams.role;
        }

        this.findOne({ email: permitParams.email })
          .then(user => {
            if (user) {
              throw new Error('Email has taken');
            }

            permitParams.loginKey = randomstring.generate(40);
            permitParams.password = bcrypt.hashSync(permitParams.password, 10);

            return this.create(permitParams);
          })
          .then(user =>
            resolve(
              user.toJson({
                token: generateToken({ loginKey: user.loginKey }),
              }),
            ),
          )
          .catch(error => reject(error));
      } catch (e) {
        reject(e);
      }
    });
  };

  // eslint-disable-next-line func-names
  Schema.statics.updateData = function(
    _id,
    params = {},
    permission = false,
    isAdmin = false,
  ) {
    return new Promise((resolve, reject) => {
      try {
        if (!permission) {
          throw new Error('Permission denied');
        }

        this.findOne({ _id })
          .then(user => {
            if (!user) {
              throw new Error('User not found');
            }

            const permitParams = Object.entries(params || {}).reduce(
              (obj, [key, value]) =>
                permitFields.includes(key) ? { ...obj, [key]: value } : obj,
              {},
            );

            if (!isAdmin) {
              delete permitParams.role;
            }

            delete permitParams.email;

            if (permitParams.password) {
              permitParams.password = bcrypt.hashSync(
                permitParams.password,
                10,
              );
            }

            return user.update(permitParams).then(() => this.findOne({ _id }));
          })
          .then(user => resolve(user.toJson()))
          .catch(error => reject(error));
      } catch (e) {
        reject(e);
      }
    });
  };

  Schema.statics.remove = function(_id, admin = false) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!admin) {
          throw new Error('Permission denied');
        }

        const user = await this.findOne({ _id, deleted: [false, null] });
        if (!user) {
          throw new Error('User not found');
        }

        await user.delete();
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  };

  Schema.set('toObject', { virtuals: true });

  Schema.plugin(mongooseDelete, { deletedAt: true });

  return mongoose.model('User', Schema);
};
