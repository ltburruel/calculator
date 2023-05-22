const readline = require('readline');
const { parseInput } = require('./parseInput');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on('line', (input) => {
  parseInput(input);
});

rl.on('close', () => {
  process.exit(0);
});
