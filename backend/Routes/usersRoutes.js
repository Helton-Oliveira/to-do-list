const UserController = require('../Controller/UserController.js');
const { Router } = require('express');

const userController = new UserController();
const router = Router();

router.get('/users', (req, res) => userController.getAllRegisters(req, res));
router.get('/users/:id', (req, res) => userController.getOneRegister(req, res));
router.post('/users/Create-an-account', (req, res) => userController.create(req, res));
router.put('/users/:id/updatingData', (req, res) => userController.update(req, res));
router.delete('/users/:id/delete', (req, res) => userController.deleted(req, res));

module.exports = router;
