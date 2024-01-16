import UserController from '../Controller/UserController.js';
import { Router } from 'express';

const userController = new UserController();
const router = Router();

router.get('/user', (req, res) => userController.getAllRegisters(req, res));
