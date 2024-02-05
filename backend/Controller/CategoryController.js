const Controller = require('./Controller.js');
const CategoryServices = require('../Services/CategoryServices.js');
const processSearch = require('../helperFunctions/processSearch.js')

const categoryServices = new CategoryServices();

class CategoryController extends Controller {
    constructor() {
        super(categoryServices)
    }

    filterByCategory = async (req, res, next) => {
        const query = req.query;
        const sucessQuery = await processSearch(query);

        if(sucessQuery !== null) {
            const categoriesByFilter = await categoryServices.searchQuery(sucessQuery)

            res.status(200).json(categoriesByFilter);
        } else {
            res.status(200).send([]);
        }
    } 
}

module.exports= CategoryController;