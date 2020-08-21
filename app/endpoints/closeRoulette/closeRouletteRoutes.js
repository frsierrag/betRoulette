const express = require('express');
const close = require('./closeRouletteOperations');
const router = express.Router();
router.patch('/', async function(req, res){
    try {
        let result = await close.closeRoulette(req.body.idRoulette);
        return res.status(200).send(result);
    } catch(err) {
        return res.status(500).send(err);
    }
});
module.exports = router;