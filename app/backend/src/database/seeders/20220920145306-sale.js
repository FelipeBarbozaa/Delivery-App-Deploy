'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 50.00,
        delivery_address: 'Rua sem nome',
        delivery_number: 50,
        sale_date: new Date(),
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 125.00,
        delivery_address: 'Rua sem nome',
        delivery_number: 50,
        sale_date: new Date(),
        status: 'Aprovado',
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 25.00,
        delivery_address: 'Rua sem nome',
        delivery_number: 50,
        sale_date: new Date(),
        status: 'Entregue',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};