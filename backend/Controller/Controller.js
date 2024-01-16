class Controller {
    constructor(entityServices) {
        this.entityServices = entityServices
    }

    async getAllRegisters(req, res) {
        const all = await this.entityServices.getAll();

        return res.status(200).json(all);
    }
}


export default Controller;