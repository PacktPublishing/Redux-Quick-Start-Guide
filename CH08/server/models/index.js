const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const uristring = process.env.MONGODB_URI || 'mongodb://localhost/rask-lege';

mongoose.connect(
  uristring,
  err =>
    console.log(
      err
        ? `ERROR, connecting to: ${uristring}. ${err}`
        : `Succeeded connected to: ${uristring}`,
    ),
);

const db = {};

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 &&
      file !== 'index.js' &&
      file !== 'migrations' &&
      file !== 'seeds.js',
  )
  .forEach(file => {
    // eslint-disable-next-line global-require
    const model = require(path.join(__dirname, file))(mongoose, mongooseDelete);
    db[model.collection.collectionName] = model;
  });

module.exports = db;
