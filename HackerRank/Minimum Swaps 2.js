'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let i = 0,
    aux = 0,
    swaps = 0,
    index = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== i + 1) {
      index = arr.indexOf(i + 1, i);
      aux = arr[i];
      arr[i] = arr[index];
      arr[index] = aux;
      swaps++;
    }
  }
  return swaps;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const res = minimumSwaps(arr);

  ws.write(res + '\n');

  ws.end();
}
