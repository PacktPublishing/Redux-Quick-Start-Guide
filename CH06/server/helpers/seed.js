if (
  process.argv.length <= 2 ||
  !['Admin', 'User', 'Doctor'].includes(process.argv[2])
) {
  console.log(`The script need a params: ${__filename}`);
  console.log('Params valid: Doctor');
  process.exit(-1);
}

const faker = require('faker');
require('../helpers/prototype');
const Model = require('../models');

const run = param => {
  console.log(`Script runing: ${param}`);

  switch (param) {
    case 'Doctor':
      return Promise.all(
        [...new Array(100).keys()].map(() =>
          Model.users.createData(
            {
              password: '123123',
              confirmPassword: '123123',
              email: faker.internet.email(),
              photo: faker.image.imageUrl(),
              name: faker.name.findName(),
            },
            { role: 'practitioner' },
          ),
        ),
      );
    case 'Admin':
      return Model.users.createData(
        {
          password: '123123',
          confirmPassword: '123123',
          email: 'admin@rasklege.com',
          photo: faker.image.imageUrl(),
          name: faker.name.findName(),
        },
        { role: 'admin' },
      );
    default:
      return Promise.all(
        [...new Array(100).keys()].map(() =>
          Model.users.createData({
            password: '123123',
            confirmPassword: '123123',
            email: faker.internet.email(),
            photo: faker.image.imageUrl(),
            name: faker.name.findName(),
          }),
        ),
      );
  }
};

run(process.argv[2])
  .then((...others) => {
    console.log('Finished:', others);
  })
  .catch(error => {
    console.log('Error:', error);
    process.exit(-1);
  });
