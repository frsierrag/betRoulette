const express = require('express');
const bet = require('./betController');
const router = express.Router();
router.post('/',  async function(req, res){
    return await bet.betController(req.body.idRoulette, req.headers.iduser, req.body.number, req.body.color, 
        req.body.betAmount).then((result) => {
        console.log('result', result)
        return res.status(200).send(result);
    }).catch(err => {
        console.log('err', err,'\n\n')
        if (err.length > 0) {
            return res.status(500).send(err);
        }        
    })
});
module.exports = router;