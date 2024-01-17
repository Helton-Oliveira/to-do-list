const Controller = require('./Controller.js');
const TasksServices = require('../Services/TasksServices.js');

const taskServices = new TasksServices;

class TaskController extends Controller {
    constructor() {
        super(taskServices);
    }
}

module.exports = TaskController;