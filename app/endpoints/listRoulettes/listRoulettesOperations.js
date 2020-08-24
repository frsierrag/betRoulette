let firebase = require('../../common/firebase');
const msg = require('../../common/messages');
exports.listRoulettes = async function () {
    let summaryRoulettes = [];
    await firebase.ref('dataRoulette').once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            let dataRoulette = childSnapshot.val();
            summaryRoulettes.push(dataRoulette);
        });
    });
    return summaryRoulettes;
}