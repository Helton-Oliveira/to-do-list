const Services = require('./Services.js');
const dbSource = require('../database/models');
const tasks  = require('../database/migrations/20240129011452-create-task.js');
const Task = require('../database/models/task.js')
const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize({
    hots: 'localhost',
    dialect: 'sqlite',
    storage: './backend/database/storage/database.sqlite',
})

class TaskServices extends Services {
    constructor() {
        super('Task'); 
        this.model = 'Task'
    }

    getAllTasksPerCategory = async (user_id, category_id) => {
        const query = `
        SELECT tasks.*
        FROM tasks
        JOIN categories ON tasks.category_id = categories.id
        WHERE categories.id = :category_id
          AND categories.user_id = :user_id;
    `;

    const tasksFilter = await sequelize.query(query, {
      replacements: { category_id, user_id },
      type: QueryTypes.SELECT,
      mapToModel: Task
    });

    return tasksFilter;
    }
}



module.exports = TaskServices;