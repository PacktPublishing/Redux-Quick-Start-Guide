/* eslint consistent-return:0 import/order:0 */

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@server', __dirname);

const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');

const app = express();
require('./helpers/prototype');
require('./models');

const secret = process.env.SECRET || 'AAdasds23djasd3ASd2ss@';

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({ secret, resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, '../build/')));

require('./api')(app);

const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
