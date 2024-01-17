const Controller = require('./Controller.js');
const UserServices = require('../Services/UsersServices.js'); 

const userServices = new UserServices;

class UserController extends Controller {
    constructor() {
        super(userServices);
    }
}

module.exports = UserController;