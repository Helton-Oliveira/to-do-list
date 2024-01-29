const Controller = require('./Controller.js');
const CategoryServices = require('../Services/CategoryServices.js');

const categoryServices = new CategoryServices();

class CategoryController extends Controller {
    constructor() {
        super(categoryServices)
    }
}

module.exports= CategoryController;