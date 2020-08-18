let firebase = require('../../common/firebase');
exports.createRoulette = function (res, req) {
    let dataCreate = {};
    dataCreate.idRoulette = Date.now().toString();
    dataCreate.statusRoulette = true;
    console.log(dataCreate);
    firebase.ref('dataRoulette').push(dataCreate);     
    return res.res.status(200).send(dataCreate);
}