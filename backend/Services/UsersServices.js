const Services = require("./services.js");

class UserServices extends Services {
    constructor() {
        super('User');
    }
}

module.exports = UserServices;