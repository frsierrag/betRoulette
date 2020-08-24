const express = require('express');
//const bet = require('./betController');
const bet = require('./betOperations');
const router = express.Router();
router.post('/',  async function(req, res){
    return await bet.betRoulette(req.body.idRoulette, req.headers.iduser, req.body.number, req.body.color, 
        req.body.betAmount).then((result) => {
        if (result.error == undefined) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send(result);
        } 
    }).catch(err => {
        return res.status(500).send(err);
    })
});
module.exports = router;