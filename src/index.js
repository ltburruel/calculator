const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on('line', (input) => {
  console.log('input: ', input);
});

rl.on('close', () => {
  process.exit(0);
});
