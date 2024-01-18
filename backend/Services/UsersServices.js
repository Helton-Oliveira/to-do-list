const Services = require("./services.js");

class UserServices extends Services {
    constructor() {
        super('User');
    }

    async getAllTasksPerUser(id) {
        const user = await super.getOne(id);
        const allTasks = await user.getOpenTasks();
        return allTasks;
    }
}

module.exports = UserServices;