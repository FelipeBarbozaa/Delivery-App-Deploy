/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Felipe Barboza',
        email: 'felipebarboza5@gmail.com',
        password: '25d55ad283aa400af464c76d713c07ad', // 12345678
        role: 'administrator',
        active: true
      },
      {
        id: 2,
        name: 'Freddie Mercury',
        email: 'freddie@gmail.com',
        password: '25d55ad283aa400af464c76d713c07ad', // 12345678
        role: 'seller',
        active: true
      },
      {
        id: 3,
        name: 'Nathaly',
        email: 'nathaly@gmail.com',
        password: '25d55ad283aa400af464c76d713c07ad', // 12345678
        role: 'customer',
        active: false,
      },
    ],
    {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};