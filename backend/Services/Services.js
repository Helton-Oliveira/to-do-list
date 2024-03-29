const dbSource = require('../database/models');

class Services {
    constructor(model) {
        this.model = model
    } 

    async getAll() {
        return dbSource[this.model].findAll();
    }

    async getOne(id) {
        return dbSource[this.model].findByPk(id);
    }

    async createNew(where) {
        return dbSource[this.model].create({...where});
    }

    async toUpdate(data, id, transacao = {}) {
        return dbSource[this.model].update(data, {
            where: { id: id },
        });
    }

    async deleting(where) {
        return dbSource[this.model].destroy({
            where: { id: where }
        });
    }


    async searchQuery(where) {
        return dbSource[this.model].findAll({
            where: {...where }
        });
    }
}

module.exports = Services;