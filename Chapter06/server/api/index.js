const express = require('express');
const User = require('./user');
const Practitioner = require('./practitioner');

const { authenticate, injectUserToReq } = require('../helpers/auth');

module.exports = app => {
  const router = express.Router();
  const routerAuth = express.Router();

  router.post('/users', User.signup);
  router.post('/users/signin', User.signin);

  routerAuth.get('/users/auth', User.auth);
  routerAuth.get('/users', User.index);
  routerAuth.get('/users/:id', User.show);
  routerAuth.put('/users/:id', User.update);
  routerAuth.delete('/users/:id', User.destroy);

  router.get('/practitioners', Practitioner.index);
  routerAuth.post('/practitioners', Practitioner.create);
  routerAuth.put('/practitioners/:id', Practitioner.update);
  routerAuth.delete('/practitioners/:id', Practitioner.destroy);

  app.use('/api', injectUserToReq, router);
  app.use('/api', authenticate, routerAuth);
};
