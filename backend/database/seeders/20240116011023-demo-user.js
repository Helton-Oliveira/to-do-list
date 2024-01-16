'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Solange',
        cpf: '63058133022',
        email: 'solange@email.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});  
  }
};
