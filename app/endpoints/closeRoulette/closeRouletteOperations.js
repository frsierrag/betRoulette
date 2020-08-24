let firebase = require('../../common/firebase');
const msg = require('../../common/messages');
exports.closeRoulette = async function (idRoulette) {
    let betResults = {};
    await firebase.ref('dataRoulette').once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            let dataRoulette = childSnapshot.val();
            let keyRoulette = childSnapshot.key;
            if (dataRoulette.idRoulette == idRoulette) {
                firebase.ref('dataRoulette/' + keyRoulette).set({
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
    let summaryBetMade = [];
    await firebase.ref('betMades').once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            let dataBetMades = childSnapshot.val();
            if (dataBetMades.idRoulette == idRoulette) {
                summaryBetMade.push(dataBetMades);
            }
        });
    });
    return summaryBetMade;
}
async function betResultsByIdRoulette(idRoulette) {
    let betResults = {};
    let totalNumberBets = 0;
    let totalWonBets = 0;
    let totalAmountTakedByRoulette = 0;
    let totalAmountPaidByRoulette = 0;
    await firebase.ref('betMades').once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            let dataBetMades = childSnapshot.val();
            if (dataBetMades.idRoulette == idRoulette && dataBetMades.dealStatus == msg.messagesCodes.successStatus) {
                totalNumberBets = totalNumberBets + 1;
                if (dataBetMades.result.betStatus == msg.messagesCodes.wonBet) {
                    totalWonBets = totalWonBets + 1;                                
                }
                totalAmountTakedByRoulette = totalAmountTakedByRoulette + dataBetMades.result.betAmount;
                totalAmountPaidByRoulette = totalAmountPaidByRoulette + dataBetMades.result.profits;                               
            }            
        });
    });
    betResults.totalNumberBets = totalNumberBets;
    betResults.totalWonBets = totalWonBets;
    betResults.totalAmountCollectedByRoulette = totalAmountTakedByRoulette;
    betResults.totalAmountPaidByRoulette = totalAmountPaidByRoulette;
    betResults.gainByRoulette = totalAmountTakedByRoulette - totalAmountPaidByRoulette;
    return betResults;
}