const regexp = require('./regexp');
const betAmountVal = {
    type: Number,
    required: true,
    match: regexp.amount
};
module.exports = betAmountVal;