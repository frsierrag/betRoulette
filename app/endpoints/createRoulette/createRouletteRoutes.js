const express = require('express');
const create = require('./createRouletteOperations');
const router = express.Router();
router.put('/', create.createRoulette);
module.exports = router;