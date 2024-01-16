import TaskController from '../Controller/TaskController.js';
import { Router } from 'express';

const taskController = new TaskController();

const router = Router()

router.get('/user/:id/tasks', (req, res) => taskController.getAllRegisters());

