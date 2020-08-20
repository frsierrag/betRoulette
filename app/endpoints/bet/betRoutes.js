const express = require('express');
const bet = require('./betController');
const router = express.Router();
router.post('/',  function(req, res){
    return  bet.betController(req.body.idRoulette, req.body.idUser, req.body.number, req.body.color, 
        req.body.betAmount).then((result) => {
        console.log('result', result)
        return res.status(200).send(result);
    }).catch(err => {
        console.log('err', err)
        return res.status(500).send(err);
    })
    /*    
    try {
        let result = await bet.betController(req.body.idRoulette, req.body.idUser, req.body.number, 
            req.body.color, req.body.betAmount);
        console.log('result', result)
        return res.status(200).send(result);
    } catch(err) {
        console.log('err', err)
        return res.status(500).send(err);
    }
    */
});
module.exports = router;