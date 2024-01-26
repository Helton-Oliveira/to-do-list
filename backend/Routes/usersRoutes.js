const UserController = require('../Controller/UserController.js');
const { Router } = require('express');

const userController = new UserController();
const router = Router();

router.get('/users', userController.getAllRegisters);
router.get('/users/:id', userController.getOneRegister);
router.get('/users/:user_id/tasks', userController.takeAllTasks);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.deleted);

module.exports = router;

