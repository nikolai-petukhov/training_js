const readline = require('node:readline');
const isEven = require('./1/1.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1
rl.question(`Enter your number\n`, number => {
  console.log(`${number} is ${isEven(number) ? 'even' : 'odd'}`);
  rl.close();
});