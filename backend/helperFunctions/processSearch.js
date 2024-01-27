const { Op } = require("sequelize");

async function processSearch(search) {
    const { priorTo , laterThan } = search;

    let query = {};

    if(priorTo || laterThan) query.createdAt = {};

    if(priorTo) query.createdAt[Op.lte] = priorTo;
    if(laterThan) query.createdAt[Op.gte] = laterThan;

    return query;
}

module.exports= processSearch;