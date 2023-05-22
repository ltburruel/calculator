const readline = require('readline');
const Calculator = require('./Calculator');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const calc = new Calculator({
  onUpdateDisplay: console.log,
});

rl.on('line', (input) => {
  calc.addInput(input);
});

rl.on('close', () => {
  process.exit(0);
});
