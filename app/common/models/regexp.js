const regexp = {
    numbersRoulette: /^[0-9]$|^[1-2]\d$|^3[0-6]$/,
    amount: /^([1-9][0-9]{0,3}|10000)$$/
};
module.exports = regexp;