let firebase = require('../../common/firebase');
exports.openRoulette = function (res, req) {
    let openStatus = false;
    firebase.ref('dataRoulette').once('value', (snapchot) => {
        const data = snapchot.val();
        for (let elementData in data) {
            if (req.req.body.id == data[elementData].id) {
                openStatus = data[elementData].status;
                return res.res.status(200).send(openStatus); 
            }
        } 
    });    
}