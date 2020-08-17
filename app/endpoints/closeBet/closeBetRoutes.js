const express = require('express');
const close = require('./closeBetOperations');
const router = express.Router();
router.post('/', close.closeRoulette);
module.exports = router;