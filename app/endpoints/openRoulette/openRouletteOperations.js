let firebase = require('../../common/firebase');
const msg = require('../../common/messages');
exports.openRoulette = async function (idRoulette) {
    let openStatus = {};
    openStatus.statusOperation = msg.messagesCodes.rejectedStatus;
    await firebase.ref('dataRoulette').once('value', snapchot => {
        snapchot.forEach(function(childSnapshot) {
            let childData = childSnapshot.val();
            let childKey = childSnapshot.key;
            if (childData.idRoulette == idRoulette) {
                firebase.ref('dataRoulette/' + childKey).set({
                    idRoulette: idRoulette,
                    statusRoulette: true
                });
                openStatus.statusOperation = msg.messagesCodes.successStatus;
            }
        });
    });
    return openStatus;
}