const TaskController = require('../Controller/TaskController.js');
const { Router } = require('express');

const taskController = new TaskController();

const router = Router();

router.get('/tasks', taskController.getAllRegisters);
router.get('/tasks/:id', taskController.getOneRegister);
router.post('/tasks', taskController.create);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.deleted);


module.exports = router;

