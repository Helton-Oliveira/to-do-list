const dbSource = require('../database/models');

class Services {
    constructor(model) {
        this.model = model
    } 

    async getAll() {
        return dbSource[this.model].findAll();
    }

    async getOne(where) {
        return dbSource[this.model].findByPk(where);
    }

    async createNew(where) {
        return dbSource[this.model].create({...where});
    }

    async toUpdate(data, id) {
        return dbSource[this.model].update(data, {
            where: { id: id }
        });
    }

    async deleting(where) {
        return dbSource[this.model].destroy({
            where: { id: where }
        });
    }
}

module.exports = Services;