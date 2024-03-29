const Controller = require('./Controller.js');
const TasksServices = require('../Services/TasksServices.js');
const processSearch = require('../helperFunctions/processSearch.js')

const taskServices = new TasksServices;

class TaskController extends Controller {
    constructor() {
        super(taskServices);
    }

    taskTimeQuery = async (req, res, next) => {
        const query = req.query;
        const sucessQuery = await processSearch(query);

        if(sucessQuery !== null) {
            const tasksByFilter =  await taskServices.searchQuery(sucessQuery)

            res.status(200).json(tasksByFilter);
        } else {
            res.status(200).send([]);
        }
    } 

    getTaskPerCategory = async (req, res, next) => {
        const {user_id, category_id } =  req.params;

        const query = await taskServices.getAllTasksPerCategory(Number(user_id), Number(category_id));

        res.status(200).json(query);
    }
}

module.exports = TaskController;