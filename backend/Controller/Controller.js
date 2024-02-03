const NotFound = require('../Errors/NotFound.js');

class Controller {
    constructor(entityServices) {
        this.entityServices = entityServices
    }

     getAllRegisters = async (req, res, next) => {
        try {
            const all = await this.entityServices.getAll();
            res.status(200).json(all);
        } catch (error) {
            console.log(error)
            next(error);
        }
    }

     getOneRegister = async (req, res, next) => {
        try {
            const { id } = req.params;
            const one = await this.entityServices.getOne(Number(id));
            
            if(one === null) {
                next(new NotFound().sendReply(res));
            } 

            res.status(200).json(one);
        } catch (error) {
            next(error);
        }
    }

     create = async (req, res, next) => {
        try {
            const data = req.body;
            console.log(req.body)
            const sucess = await this.entityServices.createNew(data);

            res.status(200).json(sucess);
            
        } catch (error) {
            next(error)
        }
    }

     update = async (req, res, next) => {
        try {
            const  id  = req.params.id;
            const newData = req.body;
            const updateData = await this.entityServices.toUpdate(newData, Number(id));


            if(updateData === null) return res.status(500).json({msg: 'erro ao atualizar usuário'})

            return res.status(200).json({msg: 'usuário alterado com sucesso'})
        } catch (error) {
            next(error);
        }
    }

    deleted = async (req, res, next) => {
        try {
            const { id } = req.params;
            const isDeleted = await this.entityServices.deleting(Number(id));

            if( isDeleted != 0) return res.status(200).json({msg: 'usuario deletado com sucesso'});

            throw isDeleted;

        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller;