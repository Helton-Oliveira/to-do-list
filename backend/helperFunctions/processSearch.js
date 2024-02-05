const { Op } = require("sequelize");

async function processSearch(search) {
    const { priorTo , laterThan, category, status } = search;

    let query = {};

    if(priorTo || laterThan) query.createdAt = {};

    if(priorTo) query.createdAt[Op.lte] = priorTo;
    if(laterThan) query.createdAt[Op.gte] = laterThan;

    if(category) query.name = category.toLowerCase();

    if(status) query.status = status
        
    return query;
}

module.exports= processSearch;