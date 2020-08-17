const express = require('express');
const open = require('./openRouletteOperations');
const router = express.Router();
router.get('/', open.openRoulette);
module.exports = router;