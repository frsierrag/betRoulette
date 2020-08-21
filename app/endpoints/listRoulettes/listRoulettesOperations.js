let firebase = require('../../common/firebase');
const msg = require('../../common/messages');
exports.listRoulettes = async function () {
    let briefRoulettes = [];
    await firebase.ref('dataRoulette').once('value', snapchot => {
        snapchot.forEach(childSnapshot => {
            let childData = childSnapshot.val();
            briefRoulettes.push(childData);
        });
    });
    return briefRoulettes;
}