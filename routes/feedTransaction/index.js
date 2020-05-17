const express = require('express');
const router = express.Router();

const { getAll, create, deleteById } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.delete('/:id', deleteById);

module.exports = router;
