const express = require('express');
const router = express.Router();

const { getAll, create, updateAmount } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.put('/:id', updateAmount);

module.exports = router;
