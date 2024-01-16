import Controller from './Controller.js'
import TasksServices from '../Services/TasksServices.js';

const taskServices = new TasksServices();

class TaskController extends Controller {
    constructor() {
        super(taskServices);
    }
}

export default TaskController;