let firebase = require('../../common/firebase');
exports.openRoulette = function (res, req) {
    let openStatus = {};
    openStatus.statusOperation = false;
    firebase.ref('dataRoulette').once('value', (snapchot) => {
        const data = snapchot.val();
        for (let elementData in data) {
            if (req.req.body.idRoulette == data[elementData].idRoulette) {
                openStatus.statusOperation = data[elementData].status;
                return res.res.status(200).send(openStatus); 
            }
        } 
    });    
}