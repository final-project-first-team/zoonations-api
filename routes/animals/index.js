const express = require('express');
const router = express.Router();

const { getAll, getById, create, editById, deleteById, filterByName, filterByZoo } = require('./controller');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', editById);
router.delete('/:id', deleteById);
router.get('/name', filterByName);
router.get('/zoo', filterByZoo);

module.exports = router;
