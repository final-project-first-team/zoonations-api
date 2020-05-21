const express = require('express');
const router = express.Router();

const { getAll, getById, create, edit, deleteById } = require('./controller');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', edit);
router.delete('/:id', deleteById);

module.exports = router;
