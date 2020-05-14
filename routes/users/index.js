const express = require('express');
const router = express.Router();
const verify = require('../authorization');

const { getAll, create, login, getUserById } = require('./controller');

router.get('/', getAll);
router.get('/id', verify, getUserById);
router.post('/', create);
router.post('/login', login);

module.exports = router;
