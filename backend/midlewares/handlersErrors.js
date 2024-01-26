const BaseError = require('../Errors/BaseError.js');
const NotFound = require('../Errors/NotFound.js');
const ValidationsError = require('../Errors/ValidationsError.js');
const Sequelize = require('sequelize');
const sequelize = require('sequelize')



function errorHandler (error, req, res, next) {
    console.log(error);

    if (error instanceof Sequelize.ValidationError) {
        new ValidationsError(error).sendReply(res);

    } else if (error instanceof NotFound) {
        error.sendReply(res);

    } else  {
        new BaseError().sendReply(res);
    }

}

module.exports = errorHandler;