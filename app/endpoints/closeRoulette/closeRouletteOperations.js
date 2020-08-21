let firebase = require('../../common/firebase');
const msg = require('../../common/messages');
exports.closeRoulette = async function (idRoulette) {
    let betResults = {};
    await firebase.ref('dataRoulette').once('value', snapchot => {
        snapchot.forEach(childSnapshot => {
            let childData = childSnapshot.val();
            let childKey = childSnapshot.key;
            if (childData.idRoulette == idRoulette) {
                firebase.ref('dataRoulette/' + childKey).set({
                    idRoulette: idRoulette,
                    statusRoulette: false
                });
            }
        });
    });
    betResults = betResultsByIdRoulette(idRoulette);
    //betResults = operationMadesByIdRoulette(idRoulette);
    return betResults;
}
async function operationMadesByIdRoulette(idRoulette) {
    let briefBetMade = [];
    await firebase.ref('betMades').once('value', snapchot => {
        snapchot.forEach(childSnapshot => {
            let childData = childSnapshot.val();
            if (childData.idRoulette == idRoulette) {
                briefBetMade.push(childData);
            }
        });
    });
    return briefBetMade;
}
async function betResultsByIdRoulette(idRoulette) {
    let betResults = {};
    let totalNumberBets = 0;
    let totalWonBets = 0;
    let totalAmountTakedByRoulette = 0;
    let totalAmountPaidByRoulette = 0;
    await firebase.ref('betMades').once('value', snapchot => {
        snapchot.forEach(childSnapshot => {
            let childData = childSnapshot.val();
            if (childData.idRoulette == idRoulette && childData.dealStatus == msg.messagesCodes.successStatus) {
                totalNumberBets = totalNumberBets + 1;
                if (childData.result.betStatus == msg.messagesCodes.wonBet) {
                    totalWonBets = totalWonBets + 1;                                
                }
                totalAmountTakedByRoulette = totalAmountTakedByRoulette + childData.result.betAmount;
                totalAmountPaidByRoulette = totalAmountPaidByRoulette + childData.result.profits;                               
            }            
        });
    });
    betResults.totalNumberBets = totalNumberBets;
    betResults.totalWonBets = totalWonBets;
    betResults.totalAmountTakedByRoulette = totalAmountTakedByRoulette;
    betResults.totalAmountPaidByRoulette = totalAmountPaidByRoulette;
    betResults.gainByRoulette = totalAmountTakedByRoulette - totalAmountPaidByRoulette;
    return betResults;
}