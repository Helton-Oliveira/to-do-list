const CategoryController = require('../Controller/CategoryController.js');
const{ Router } = require('express');

const categoryController = new CategoryController();
const router = Router();

router.get('/category', categoryController.getAllRegisters)


module.exports= router;