const Controller = require('./Controller.js');
const UserServices = require('../Services/UsersServices.js'); 

const userServices = new UserServices;

class UserController extends Controller {
    constructor() {
        super(userServices);
    }

    takeAllTasks = async (req, res) => {
        const { user_id } = req.params;
        const listOfTasks = await userServices.getAllTasksPerUser(Number(user_id));
        res.status(200).json(listOfTasks);
    }
}

module.exports = UserController;