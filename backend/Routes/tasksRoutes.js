const TaskController = require('../Controller/TaskController.js');
const { Router } = require('express');

const taskController = new TaskController();

const router = Router()

router.get('/tasks/all', (req, res) => taskController.getAllRegisters(req, res));
router.post('/task/create', (req, res) => taskController.create(req, res));
router.put('/task/:id/updating', (req, res) => taskController.update(req, res));
router.delete('/task/:id/delete', (req, res) => taskController.deleted(req, res));


module.exports = router

