const express = require('express');
const bet = require('./betNumberOperations');
const router = express.Router();
router.post('/', bet.betNumber);
module.exports = router;