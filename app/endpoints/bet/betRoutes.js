const express = require('express');
const bet = require('./betController');
const router = express.Router();
router.post('/',  async function(req, res){
    return await bet.betController(req.body.idRoulette, req.headers.iduser, req.body.number, req.body.color, 
        req.body.betAmount).then((result) => {
        return res.status(200).send(result);
    }).catch(err => {
        return res.status(500).send(err);
    })
});
module.exports = router;