const Services = require('./services.js');
const dbSource = require('../database/models')

class TaskServices extends Services {
    constructor() {
        super('Task'); 
        this.model = 'Task'
    }

    searchQuery = async (where) => {
        const query = await dbSource[this.model].findAll({
            where: {...where }});

        return query
    }
}


module.exports = TaskServices;