class BaseError {
    constructor(response = 'internal Server Error', status = 500) {
        this.response = response
        this.status = status
    }

    sendReply(res) {
        return res.status(this.status).json({msg: this.response});
    }
}

module.exports = BaseError;