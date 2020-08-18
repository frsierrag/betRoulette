const express = require('express');
const create = require('./createRouletteOperations');
const router = express.Router();
router.get('/', create.createRoulette);
module.exports = router;