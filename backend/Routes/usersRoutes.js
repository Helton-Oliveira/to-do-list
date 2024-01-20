const UserController = require('../Controller/UserController.js');
const { Router } = require('express');

const userController = new UserController();
const router = Router();

router.get('/users', (req, res) => userController.getAllRegisters(req, res));
router.get('/users/:id', (req, res) => userController.getOneRegister(req, res));
router.get('/users/:user_id/tasks', (req, res) => userController.takeAllTasks(req, res));
router.post('/users', (req, res) => userController.create(req, res));
router.put('/users/:id', (req, res) => userController.update(req, res));
router.delete('/users/:id', (req, res) => userController.deleted(req, res));

module.exports = router;
