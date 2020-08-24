let firebase = require('../../common/firebase');
const msg = require('../../common/messages');
exports.openRoulette = async function (idRoulette, checkStatusWithoutChange) {
    let openStatus = {};
    openStatus.statusOperation = msg.messagesCodes.rejectedStatus;
    await firebase.ref('dataRoulette').once('value', snapshot => {
        snapshot.forEach(function(childSnapshot) {
            let dataRoulette = childSnapshot.val();
            let keyRoulette = childSnapshot.key;
            if (dataRoulette.idRoulette == idRoulette) {
                if (checkStatusWithoutChange == true && dataRoulette.statusRoulette == false) {
                    openStatus.statusOperation = msg.messagesCodes.rejectedStatus;                 
                } else {
                    firebase.ref('dataRoulette/' + keyRoulette).set({
                        idRoulette: idRoulette,
                        statusRoulette: true
                    });
                    openStatus.statusOperation = msg.messagesCodes.successStatus;              
                }                
            }
        });
    });
    return openStatus;
}