const express = require('express');
const list = require('./listRoulettesOperations');
const router = express.Router();
router.get('/', async function(req, res){
    try {
        let result = await list.listRoulettes();
        return res.status(200).send(result);
    } catch(err) {
        return res.status(500).send(err);
    }
});
module.exports = router;