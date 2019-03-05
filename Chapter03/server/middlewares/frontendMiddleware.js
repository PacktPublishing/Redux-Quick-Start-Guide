/* eslint-disable global-require */
/* eslint arrow-parens: ["off"] */
module.exports = app => {
  const webpackConfig = require('../../webpack/webpack.dev.babel');
  const addDevMiddlewares = require('./addDevMiddlewares');
  addDevMiddlewares(app, webpackConfig);

  return app;
};
