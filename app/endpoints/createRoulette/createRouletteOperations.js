let firebase = require('../../common/firebase');
exports.createRoulette = function (res, req) {
    let dataCreate = {};
    dataCreate.id = Date.now().toString();
    dataCreate.status = true;
    console.log(dataCreate);
    firebase.ref('dataRoulette').push(dataCreate);     
    return res.res.status(200).send(dataCreate);
}