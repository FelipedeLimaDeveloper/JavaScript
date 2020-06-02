'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let total = 0;
  let groupOfSocks = {};
  ar.forEach((num) => {
    if (groupOfSocks['value' + num] === undefined) {
      groupOfSocks['value' + num] = 1;
    } else {
      groupOfSocks['value' + num] += 1;
    }
  });
  Object.values(groupOfSocks).forEach((group) => {
    total += parseInt(group / 2);
  });

  return total;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(' ')
    .map((arTemp) => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + '\n');

  ws.end();
}
