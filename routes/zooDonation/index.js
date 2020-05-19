const express = require('express');
const router = express.Router();

const { getAll, getByUserId, create, deleteById } = require('./controller');

router.get('/', getAll);
router.get('/:id', getByUserId);
router.post('/', create);
router.delete('/', deleteById)

module.exports = router;