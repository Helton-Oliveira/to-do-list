const TaskController = require('../Controller/TaskController.js');
const { Router } = require('express');

const taskController = new TaskController();

const router = Router()

router.get('/user/:id/tasks', (req, res) => taskController.getAllRegisters());

module.exports = router

