const express = require('express');
const open = require('./openRouletteOperations');
const router = express.Router();
router.put('/', open.openRoulette);
module.exports = router;