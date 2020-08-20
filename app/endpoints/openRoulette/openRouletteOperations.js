let firebase = require('../../common/firebase');
exports.openRoulette = async function (idRoulette) {
    let openStatus = {};
    openStatus.statusOperation = false;
    await firebase.ref('dataRoulette').once('value', (snapchot) => {
        const data = snapchot.val();
        for (let elementData in data) {
            if (idRoulette == data[elementData].idRoulette) {
                openStatus.statusOperation = data[elementData].statusRoulette;
                break;
            }
        }
    });
    return openStatus;
}