const Model = require('../models');
const { verifyToken } = require('./jwt');

const handleFailure = (
  res,
  { status = 400, message, ...others },
  next = null,
) => {
  res.status(status).send({
    status,
    message,
    ...others,
    success: false,
  });
  next && next();
};

const handleSuccess = (res, { status = 200, ...others }, next = null) => {
  res.status(status).send({
    status,
    ...others,
    success: true,
  });
  next && next();
};

const getUserFromKey = loginKey =>
  new Promise(resolve => {
    Model.users
      .findOne({ loginKey, deleted: [false, null] })
      .then(user => resolve(user))
      .catch(() => resolve(null));
  });

const cookieExtractor = req => {
  let tokenIn = null;
  if (req.cookies && req.cookies.token) {
    tokenIn = req.cookies.token;
  }
  return req.headers.token || req.query.token || tokenIn;
};

const injectUserToReq = (req, res, next) => {
  const token = cookieExtractor(req);

  verifyToken(token)
    .then(({ loginKey }) =>
      getUserFromKey(loginKey).then(user => {
        if (user) {
          req.user = user.toJson({ token });
        }
        next();
      }),
    )
    .catch(() => next());
};

const authenticate = (req, res, next) => {
  const token = cookieExtractor(req);

  verifyToken(token)
    .then(({ loginKey }) => {
      getUserFromKey(loginKey).then(user => {
        if (!user) {
          handleFailure(res, {
            status: 401,
            message: 'Unauthorized',
          });
        } else {
          req.user = user;
          next();
        }
      });
    })
    .catch(err => {
      handleFailure(res, {
        status: 401,
        message: err.toString(),
      });
    });
};

module.exports = {
  authenticate,
  cookieExtractor,
  injectUserToReq,
  handleFailure,
  handleSuccess,
};
