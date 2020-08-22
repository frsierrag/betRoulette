let firebase = require('../../common/firebase');
let dateFormat = require('dateformat');
const open = require('../openRoulette/openRouletteOperations');
const msg = require('../../common/messages');
exports.betRoulette = async function (idRoulette, idUser, number, color, betAmount) {
    let bet = {};    
    bet.idRoulette = idRoulette;
    bet.idUser = idUser;
    let openStatus = await open.openRoulette(idRoulette);
    if (openStatus.statusOperation == true) {
        if (number != null) {
            if (color == null) {
                bet.numberBet = number;
                bet.result = numberProfits(number, betAmount);
                bet.dealStatus = msg.messagesCodes.successStatus;
            } else {
                bet.dealStatus = msg.messagesCodes.rejectedStatus;
                bet.error = msg.errorCodes.betNumberAndColor;
            }
        } else {
            if (color == null) {
                bet.dealStatus = msg.messagesCodes.rejectedStatus;
                bet.error = msg.errorCodes.noNumberNoColor;
            } else {
                bet.colorBet = color;
                bet.result = colorProfits(color, betAmount);
                bet.dealStatus = msg.messagesCodes.successStatus;;
            }
        }
    } else {
        bet.dealStatus = msg.messagesCodes.rejectedStatus;
        bet.error = msg.errorCodes.rouletteNotOpen;
    }
    firebase.ref('betMades').push(bet);
    return bet;
}
function numberProfits(numberBet, betAmount) {
    let profits = 0;
    let valueRandom = 0;
    let result = {};
    valueRandom = Math.floor(Math.random() * (37));
    valueRandom == numberBet ? profits = betAmount * 37 : profits = 0;    
    result.numberResult = valueRandom;  
    result.betAmount = betAmount;
    result.fee = 37.0;
    result.profits = profits;    
    if (profits > 0) {
        result.totalAmount = profits;
        result.betStatus = msg.messagesCodes.wonBet;
    } else {
        result.totalAmount = 0;
        result.betStatus = msg.messagesCodes.lostBet;
    }
    result.date = dateFormat(new Date(), "isoDateTime");
    return result;
}
function colorProfits(colorBet, betAmount) {
    let profits = 0;
    let valueRandom = 0;
    let codeColor;
    colorBet == msg.messagesCodes.redColor ? codeColor = 1 : codeColor = 2;
    let result = {};
    valueRandom = Math.floor(Math.random() * (3 - 1) + 1);
    valueRandom == codeColor ? profits = betAmount * 2 : profits = 0;
    valueRandom == 1 ? result.colorResult = msg.messagesCodes.redColor : 
        result.colorResult = msg.messagesCodes.blackColor;
    result.betAmount = betAmount;
    result.fee = 2.0;
    result.profits = profits;    
    if (profits > 0) {
        result.totalAmount = profits;
        result.betStatus = msg.messagesCodes.wonBet;
    } else {
        result.totalAmount = 0;
        result.betStatus = msg.messagesCodes.lostBet;
    }
    result.date = dateFormat(new Date(), "isoDateTime");
    return result;
}