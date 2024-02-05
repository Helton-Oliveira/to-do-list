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
        const {category_id , user_id} =  req.params;

        const where = {
            category_id: category_id,
            user_id: user_id 
        }

        const query = await taskServices.getAllTasksPerCategory(where);

        res.status(200).json(query);
    }
}

module.exports = TaskController;