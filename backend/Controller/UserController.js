import Controller from './Controller.js'
import UserServices from '../Services/UsersServices.js'; 

const userServices = new UserServices;

class UserController extends Controller {
    constructor() {
        super(userServices);
    }
}

export default UserController;