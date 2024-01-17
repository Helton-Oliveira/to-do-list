class Controller {
    constructor(entityServices) {
        this.entityServices = entityServices
    }

    async getAllRegisters(req, res) {
        try {
            const all = await this.entityServices.getAll();
            return res.status(200).json(all);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    async getOneRegister(req, res){
        try {
            const { id } = req.params;
            const one = await this.entityServices.getOne(Number(id));

            if(one === null) throw new Error('Not Found!');

            return res.status(200).json(one);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    async create(req, res) {
        try {
            const data = req.body;
            const sucess = await this.entityServices.createNew(data);
            return res.status(200).json(sucess);

        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const updateData = await this.entityServices.toUpdate( newData, id );

            if(updateData === null) return res.status(500).json({msg: 'erro ao atualizar usuário'})

            return res.status(200).json({msg: 'usuário alterado com sucesso'})
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    async deleted(req, res) {
        try {
            const { id } = req.params;
            const isDeleted = await this.entityServices.deleting(Number(id));

            if( isDeleted != 0) return res.status(200).json({msg: 'usuario deletado com sucesso'});

            throw error;

        } catch (error) {
            return res.status(500).json({message: error.message = 'is not found!'})
        }
    }
}

module.exports = Controller;