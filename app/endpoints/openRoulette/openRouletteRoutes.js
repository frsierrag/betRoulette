const express = require('express');
const open = require('./openRouletteOperations');
const router = express.Router();
router.put('/', async function(req, res){
    try {
        let result = await open.openRoulette(req.body.idRoulette);
        return res.status(200).send(result);
    } catch(err) {
        return res.status(500).send(err);
    }
});
module.exports = router;