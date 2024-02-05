const Services = require('./Services.js');
const dbSource = require('../database/models')

class TaskServices extends Services {
    constructor() {
        super('Task'); 
        this.model = 'Task'
    }

    getAllTasksPerCategory = async (where) => {
        return dbSource[this.model].findAll({
            where: { 
                category_id: where.category_id,
             }
        });
    }
}


module.exports = TaskServices;