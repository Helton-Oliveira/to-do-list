const TaskController = require('../Controller/TaskController.js');
const { Router } = require('express');

const taskController = new TaskController();

const router = Router();

router.get('/tasks', (req, res) => taskController.getAllRegisters(req, res));
router.get('/tasks/:id', (req, res) => taskController.getOneRegister(req, res));
router.post('/tasks', (req, res) => taskController.create(req, res));
router.put('/tasks/:id', (req, res) => taskController.update(req, res));
router.delete('/tasks/:id', (req, res) => taskController.deleted(req, res));


module.exports = router;

