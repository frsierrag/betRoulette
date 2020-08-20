const Schema = require('validate');
const validators = require('../../common/validators');
const validator = {
    validationSchema: {
        number: validators.validations.numberBet,
        color: validators.validations.colorBet,
        betAmount: validators.validations.betAmount
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