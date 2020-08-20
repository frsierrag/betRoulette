let firebase = require('../../common/firebase');
exports.createRoulette = function () {
    let dataCreate = {};
    dataCreate.idRoulette = Date.now().toString();
    dataCreate.statusRoulette = true;
    console.log(dataCreate);
    firebase.ref('dataRoulette').push(dataCreate);
    return dataCreate;
}