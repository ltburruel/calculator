const { EQUALS, CLEAR, NEGATIVE } = require('./constants');
const { isNumber, isOperator } = require('./utils');
const { evaluateString } = require('./evaluateString');

class Calculator {
  constructor({ onUpdateDisplay }) {
    this.onUpdateDisplay = onUpdateDisplay;
    this.result = 0;
    this.expression = '';
    this.lastNumber = ''; // Keep track of last number entered for display
    this.displayValue = ''; // Last value displayed
    this._setDisplay(this.result);
  }

  _setDisplay(value) {
    if (value !== '') {
      this.displayValue = value;
      this.onUpdateDisplay(value);
    }
  }

  _clear() {
    this.result = 0;
    this.expression = '';
    this.lastNumber = '';
    this._setDisplay(this.result);
  }

  _evaluate() {
    if (this.expression.length > 0) {
      this.result = evaluateString(this.expression);
    }
    this.expression = '';
    this.lastNumber = '';
    this._setDisplay(this.result);
  }

  _addCharacter(c) {
    // Build
    if (isNumber(c)) {
      if (this.expression.length && isOperator(this.expression[this.expression.length - 1])) {
        // If last char was on operator, we are starting a new number -- Reset `lastNumber`
        this.lastNumber = '';
      }
      this.lastNumber += c;
    }

    if (this.expression.length === 0 && (isOperator(c) || c === NEGATIVE)) {
      // If first character is an operator, use the last result as first operand
      this.expression += `${this.result || 0}${c}`;
    } else {
      this.expression += c;
    }
  }

  addInput(input) {
    const cleanedInput = input.replaceAll(' ', '');
    for (const c of cleanedInput) {
      if (c === EQUALS) {
        this._evaluate();
      } else if (c === CLEAR) {
        this._clear();
      } else {
        this._addCharacter(c);
      }
    }
    this._setDisplay(this.lastNumber);
  }
}

module.exports = Calculator;
