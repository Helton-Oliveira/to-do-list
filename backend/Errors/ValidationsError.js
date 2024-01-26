const BaseError = require('./BaseError.js');

class ValidationsError extends BaseError {
    constructor(error) {
        const errorMessage = Object.values(error.errors)
        .map((errors) => `${errors.message} in the filed: ${errors.path}`)
        .join('; ')
        
        super(`The following errors were found: - ${errorMessage}`, 400)
    }
}

module.exports = ValidationsError;