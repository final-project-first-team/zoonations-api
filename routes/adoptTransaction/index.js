const express = require('express');
const router = express.Router();

const { getAll, create, deleteById, getById } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.delete('/:id', deleteById);
router.get('/:id', getById);

module.exports = router;