const express = require('express');
const list = require('./listRoulettesOperations');
const router = express.Router();
router.get('/', list.listRoulettes);
module.exports = router;