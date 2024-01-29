'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
      user_id: 1,
      name_task: 'terminar projeto',
      status: 'em processo',
      category:'estudos',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name_task: "terminar projeto",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "estudos",
      user_id: 1
  },
  {
      name_task: "terminar projeto",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "'estudos'",
      user_id: 1
  },
  {
      name_task: "busca por categoria",
      status: 'em processo',
      createdAt: new Date(),
      updatedAt: new Date(),
      "category": "estudos",
      "user_id": 1
  },
  {
      name_task: "limpar casa",
      status: "'em processo'",
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "casa",
      user_id: 3
  },
  {
      name_task: "cortar niguiri",
      status: "em processo",
      createdAt: new Date(),
      updatedAt: new Date(),
      category: "trabalho",
      user_id: 4
  }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
