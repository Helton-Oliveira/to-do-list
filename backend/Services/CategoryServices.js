const Services = require('./services.js');
const dbSource = require('../database/models')

class CategoryServices extends Services {
    constructor() {
        super("Category")
        this.model = 'Category'
    }

    byTask = async (where) => {
        const category = await dbSource[this.model].findAll({ where: where })
        return category
    }
}

module.exports= CategoryServices;

