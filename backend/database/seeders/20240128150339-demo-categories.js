'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
      id: 1,  
      name: 'estudos',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
      id: 2,
      name: "mercado",
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      id: 3,
      name: "casa",
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
