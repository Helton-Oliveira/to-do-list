'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        name: 'POO',
        status: 'em processo',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id: 1,
      },
     {
      name: "terminar projeto",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category_id: 1,
  },
  {
      name: "projeto API",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category_id: 1,
  },
  {
      name: "comprar fruta",
      status: 'em processo',
      createdAt: new Date(),
      updatedAt: new Date(),
      category_id: 2,
  },
  {
      name: "limpar casa",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category_id: 3,
  },
  {
      name: "cortar niguiri",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category_id: 2,
  }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
