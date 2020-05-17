const express = require('express');
const router = express.Router();

const { getAll, create, updateFeeds } = require('./controller');

router.get('/', getAll);
router.post('/', create);
router.put('/:id', updateFeeds);

module.exports = router;
