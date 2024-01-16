import dbSource from '../database/models';

class Services {
    constructor(model) {
        this.model = model
    } 

    async getAll() {
        return  dbSource[this.model].findAll();
    }
}

export default Services;