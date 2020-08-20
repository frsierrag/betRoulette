let firebase = require('../../common/firebase');
let dateFormat = require('dateformat');
const open = require('../openRoulette/openRouletteOperations');
const msg = require('../../common/codes');

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
                bet.dealStatus = msg.messages.successStatus;
            } else {
                bet.dealStatus = msg.messages.rejectedStatus;
                bet.error = msg.errorCodes.betNumberAndColor;
            }
        } else {
            if (color == null) {
                bet.dealStatus = msg.messages.rejectedStatus;
                bet.error = msg.errorCodes.noNumberNoColor;
            } else {
                bet.colorBet = color;
                bet.result = colorProfits(color, betAmount);
                bet.dealStatus = msg.messages.successStatus;;
            }
        }
    } else {
        bet.dealStatus = msg.messages.rejectedStatus;
        bet.error = msg.errorCodes.rouletteNotOpen;
    }
    firebase.ref('betMades').push(bet);
    return bet;
}

function numberProfits(numberBet, betAmount) {
    let profits = 0;
    let valueRandom = 0;
    let result = {};
    valueRandom = Math.floor(Math.random() * (36));
    valueRandom == numberBet ? profits = betAmount * 37 : profits = 0;
    result.numberResult = valueRandom;  
    result.betAmount = betAmount;
    result.fee = 37.0;
    result.profits = profits;    
    if (profits > 0) {
        result.totalAmount = profits;
        result.betStatus = msg.messages.winBet;
    } else {
        result.totalAmount = 0;
        result.betStatus = msg.messages.loseBet;
    }
    result.clock = dateFormat();
    return result;
}

function colorProfits(colorBet, betAmount) {
    let profits = 0;
    let valueRandom = 0;
    let codeColor;
    colorBet == msg.messages.redColor ? codeColor = 1 : codeColor = 2;
    let result = {};
    valueRandom = Math.floor(Math.random() * (2));
    valueRandom == codeColor ? profits = betAmount * 2 : profits = 0;
    valueRandom == 1 ? result.colorResult = msg.messages.redColor : result.colorResult = msg.messages.blackColor;
    result.betAmount = betAmount;
    result.fee = 2.0;
    result.profits = profits;    
    if (profits > 0) {
        result.totalAmount = profits;
        result.betStatus = msg.messages.winBet;
    } else {
        result.totalAmount = 0;
        result.betStatus = msg.messages.loseBet;
    }
    result.clock = dateFormat();
    return result;
}