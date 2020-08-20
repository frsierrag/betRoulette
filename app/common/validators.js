const regexp = {
    numbersRoulette: /^[0-9]$|^[1-2]\d$|^3[0-6]$/,
    mount: /^([1-9][0-9]{0,3}|10000)$$/
};
const numberBetVal = {
    type: Number,
    match: regexp.numbersRoulette
};
const colorBetVal = {
    type: String,
    enum: ['red', 'black']
};
const betAmountVal = {
    type: Number,
    required: true,
    match: regexp.mount
};
const utils = {
    validations: {
        numberBet: numberBetVal, 
        colorBet: colorBetVal, 
        betAmount: betAmountVal,
    },
    regexp
};
module.exports = utils;