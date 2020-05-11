const express = require("express");
const router = express.Router();

const {create, login} = require("./controller");

router.post("/", create);
router.post("/login", login);

module.exports = router;