const { OPERATORS: OPS, NEGATIVE } = require('./constants');
const { isNumber, isOperator } = require('./utils');

/**
 * Evaluate a string expression with +, -, *, and / operations
 * @param   {string}  inputStr  - "1+2*3"
 * @returns {number}  result    - 7
 */
function evaluateString(inputStr) {
  const cleanedInput = inputStr.replaceAll(' ', '');

  const valuesToSum = [];

  let numStr = '';
  let operator = OPS.add;
  let applyNegative = false;
  for (let i = 0; i < inputStr.length; i += 1) {
    const char = cleanedInput[i];

    /** ****  Handle '+/-' button  **** */
    if (char === NEGATIVE) {
      if (numStr.length > 0) {
        // Number is currently being entered, toggle negative
        numStr = `${parseFloat(numStr) * -1}`;
      } else {
        // No number has been entered, apply negative to next number
        applyNegative = !applyNegative;
      }
    }

    /** ****  Build number  **** */
    if (isNumber(char)) {
      // Continue building `numStr` until we encounter an operator
      numStr += char;
    }

    /** ****  Evaluate sub-expression  **** */
    const isLastCharacter = cleanedInput.length - 1 === i;
    if (isOperator(char) || isLastCharacter) {
      // We've reached an operator or the end of `inputStr`, signaling that `numStr` is complete. Parse it.
      let num = applyNegative ? parseFloat(numStr || '0') * -1 : parseFloat(numStr || '0');

      if (char === '%') {
        num /= 100;
      }

      // Modify the value based on the preceding operator, and push it into `valuesToSum`
      if (operator === OPS.add) {
        valuesToSum.push(num);
      } else if (operator === OPS.subtract) {
        valuesToSum.push(num * -1);
      } else if (operator === OPS.divide) {
        valuesToSum.push(valuesToSum.pop() / num);
      } else if (operator === OPS.multiply) {
        valuesToSum.push(valuesToSum.pop() * num);
      }

      // Update operator and reset values
      operator = char;
      applyNegative = false;
      numStr = '';
    }
  }

  const sum = valuesToSum.reduce((acc, value) => acc + value, 0);
  return sum;
}

module.exports = { evaluateString };
