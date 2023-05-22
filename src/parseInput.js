const { EQUALS, CLEAR } = require('./constants');
const { isNumber, isOperator } = require('./utils');

let result = 0;
let expression = '';
let lastNumber = ''; // Used to keep track of last number entered for display purposes

function updateDisplay(value) {
  console.log(value);
}

function cleanInput(input) {
  return input.replaceAll(' ', '');
}

function parseInput(input) {
  const cleanedInput = cleanInput(input);
  for (const c of cleanedInput) {
    if (c === EQUALS) {
      /** ******  Evaluate Expression  ****** */
      result = eval(expression); // TODO: Replace with custom implementation
      expression = '';
      lastNumber = '';
      updateDisplay(result);
    } else if (c === CLEAR) {
      /** ******  Clear All  ****** */
      result = 0;
      expression = '';
      lastNumber = '';
      updateDisplay(result);
    } else {
      /** ******  Build Expression  ****** */
      if (isNumber(c)) {
        if (expression.length && isOperator(expression[expression.length - 1])) {
          lastNumber = ''; // If last char was on operator, we are starting a new number -- Reset `lastNumber`
        }
        lastNumber += c;
      }
      if (expression.length === 0 && isOperator(c)) {
        expression += `${result || 0}${c}`; // If first character is an operator, use the last result as first operand.
      } else {
        expression += c;
      }
    }
  }

  if (lastNumber !== '') {
    updateDisplay(lastNumber);
  }
}

module.exports = {
  parseInput,
};
