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
      }, 
      {
        name: "fernando",
        cpf: "70824405021",
        email: "fernando@email.com",
        password: "123efefASA",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "guilherme",
        cpf: "62647948054",
        email: "guilherme@email.com",
        password: "123efefDED",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "karla",
        cpf: "16873626023",
        email: "karla@email.com",
        password: "152AAAsss",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});  
  }
};
