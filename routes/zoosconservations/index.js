const express = require('express');
const router = express.Router();

const { getAll, create, edit, deleteById } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.put('/:id', edit);
router.post('/:id', deleteById);

module.exports = router;