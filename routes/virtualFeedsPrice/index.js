const express = require('express');
const router = express.Router();

const { getAll, getById, create, updateAmount } = require('./controller');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', updateAmount);

module.exports = router;
