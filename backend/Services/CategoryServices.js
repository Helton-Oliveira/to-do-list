const Services = require('./Services.js');
const dbSource = require('../database/models')

class CategoryServices extends Services {
    constructor() {
        super("Category")
        this.model = 'Category'
    }

    getAllCategoriesPerUser = async (where) => {
        return dbSource[this.model].findAll({
            where: { user_id: where}
        })
    }
}

module.exports= CategoryServices;

