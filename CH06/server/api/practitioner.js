const Model = require('../models');
const { handleFailure, handleSuccess } = require('../helpers/auth');

module.exports = {
  index: (req, res) => {
    const queryWhere = { role: 'practitioner' };
    if (req.query.s) {
      queryWhere.name = new RegExp(req.query.s, 'i');
    }

    Model.users
      .getAll({ page: (req.query || {}).page || 1 }, queryWhere)
      .then(doctor => handleSuccess(res, { doctor }))
      .catch(errors =>
        handleFailure(res, { errors, message: errors.message, status: 401 }),
      );
  },

  create: (req, res) => {
    Model.users
      .createData(Model, req.body.practitioner, { role: 'practitioner' })
      .then(practitioner => handleSuccess(res, { practitioner }))
      .catch(errors => handleFailure(res, { errors, message: errors.message }));
  },

  update: (req, res) => {
    Model.users
      .updateData(
        req.params.id,
        req.body.practitioner,
        req.user.role === 'admin' || req.params.id === req.user.id,
      )
      .then(practitioner => handleSuccess(res, { practitioner }))
      .catch(errors => handleFailure(res, { errors, message: errors.message }));
  },

  destroy: (req, res) => {
    Model.users
      .remove(req.params.id, req.user.role === 'admin')
      .then(practitioner => handleSuccess(res, { practitioner }))
      .catch(errors => handleFailure(res, { errors, message: errors.message }));
  },
};
