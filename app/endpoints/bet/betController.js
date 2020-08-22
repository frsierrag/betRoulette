const betValidation = require('./betValidations');
const betOperations = require('./betOperations');
const msg = require('../../common/messages');
exports.betController = async function (idRoulette, idUser, number, color, betAmount) {
    return new Promise(async (resolve, reject) => {
        const body = {};
        body.number = number;
        body.color = color;
        body.betAmount = betAmount;
        if (betValidation.operation(body).length > 0) {
            let error = {};
            error.idRoulette = idRoulette;
            error.idUser = idUser;
            error.dealStatus = msg.messagesCodes.rejectedStatus;
            error.error = '04. ' + betValidation.operation(body).toString();
            reject(error);
        } else {
            let bet = await betOperations.betRoulette(idRoulette, idUser, number, color, betAmount);
            resolve(bet);
        }
    })
}