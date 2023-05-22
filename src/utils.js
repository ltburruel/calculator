const constants = require('./constants');

const operatorValues = Object.values(constants.OPERATORS);

function isNumber(char) {
  return typeof char === 'string' && char.length === 1 && char >= '0' && char <= '9';
}

function isOperator(char) {
  return operatorValues.includes(char);
}

module.exports = {
  isNumber,
  isOperator,
};
