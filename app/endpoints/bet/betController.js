const betValidation = require('./betValidations');
const betOperations = require('./betOperations');
exports.betController = async function (idRoulette, idUser, number, color, betAmount) {
    return new Promise(async (resolve, reject) => {
        const body = {};
        body.number = number;
        body.color = color;
        body.betAmount = betAmount;
        if (betValidation.operation(body).length > 0) {
            const errors = betValidation.operation(body);
            reject(errors);
        } else {
            let bet = await betOperations.betRoulette(idRoulette, idUser, number, color, betAmount);
            resolve(bet);
        }
    })
    /*
    const body = {};
    body.number = number;
    body.color = color;
    body.betAmount = betAmount;
    if (betValidation.operation(body).length > 0) {
        const errors = betValidation.operation(body);
        return errors;
    }        
    let bet = await betOperations.bet(idRoulette, idUser, number, color, betAmount);
    return bet;
    */
}