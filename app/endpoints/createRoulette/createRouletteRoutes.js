const express = require('express');
const create = require('./createRouletteOperations');
const router = express.Router();
router.get('/', function(req, res){
    try {
        let result = create.createRoulette();
        return res.status(200).send(result);
    } catch(err) {
        return res.status(500).send(err);
    }
});
module.exports = router;