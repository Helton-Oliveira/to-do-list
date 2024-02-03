const CategoryController = require('../Controller/CategoryController.js');
const{ Router } = require('express');

const categoryController = new CategoryController();
const router = Router();

router.get('/category', categoryController.getAllRegisters);
router.post('/category', categoryController.create);
router.put('/category/:id', categoryController.update);
router.delete('/category/:id', categoryController.deleted);



module.exports= router;