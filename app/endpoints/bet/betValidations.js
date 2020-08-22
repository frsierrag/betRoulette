const Schema = require('validate');
const validColor = require('../../common/models/color');
const validNumber = require('../../common/models/number');
const validAmount = require('../../common/models/amount');
const validator = {
    validationSchema: {
        number: validNumber,
        color: validColor,
        betAmount: validAmount
    },
    validation(objectToValidate) {
        return new Schema(this.validationSchema).validate(objectToValidate);
    },
    operation(body) {
        const errors = this.validation(body);
        if (errors.length > 0) {
            return errors;
        } else {
            return true;
        }
    }
};
module.exports = validator;