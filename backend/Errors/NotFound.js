const BaseError = require('./BaseError.js');

class NotFound extends BaseError {
    constructor(response = 'Not Found!') {
        super(response, 404)
    }
}
module.exports = NotFound;