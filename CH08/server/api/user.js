const Model = require('../models');
const { handleFailure, handleSuccess } = require('../helpers/auth');

module.exports = {
  auth: (req, res) => {
    if (!req.user) {
      handleFailure(res, { status: 401 });
    } else {
      Model.users
        .authUser(req.user.id)
        .then(user => handleSuccess(res, { user }))
        .catch(errors =>
          handleFailure(res, { errors, message: errors.message, status: 401 }),
        );
    }
  },

  index: (req, res) => {
    const queryWhere = {};
    if (req.query.s) {
      queryWhere.name = new RegExp(req.query.s, 'i');
    }

    Model.users
      .getAll({ page: (req.query || {}).page || 1 }, queryWhere)
      .then(users => handleSuccess(res, { users }))
      .catch(errors =>
        handleFailure(res, { errors, message: errors.message, status: 401 }),
      );
  },

  signin: (req, res) => {
    Model.users
      .authenticate(req.body.user)
      .then(user => handleSuccess(res, { user }))
      .catch(errors =>
        handleFailure(res, { errors, message: errors.message, status: 401 }),
      );
  },

  signup: (req, res) => {
    Model.users
      .createData(req.body.user, {}, req.user && req.user.role === 'admin')
      .then(user => handleSuccess(res, { user }))
      .catch(errors =>
        handleFailure(res, { errors, message: errors.message, status: 200 }),
      );
  },

  update: (req, res) => {
    Model.users
      .updateData(
        req.params.id,
        req.body.user,
        req.user.role === 'admin' || req.params.id === req.user.id,
        req.user.role === 'admin',
      )
      .then(user => handleSuccess(res, { user }))
      .catch(errors =>
        handleFailure(res, { errors, message: errors.message, status: 200 }),
      );
  },

  destroy: (req, res) => {
    Model.users
      .remove(req.params.id, req.user.role === 'admin')
      .then(user => handleSuccess(res, { user: user.toJson() }))
      .catch(errors => handleFailure(res, { errors, message: errors.message }));
  },

  show: (req, res) => {
    Model.users
      .getBy(req.params.id)
      .then(user => handleSuccess(res, { user: user.toJson() }))
      .catch(errors => handleFailure(res, { errors, message: errors.message }));
  },
};
