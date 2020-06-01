'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    neutral = 0;
  let arraySize = arr.length;
  arr.map((value) => {
    if (value > 0) {
      positive++;
    } else if (value < 0) {
      negative++;
    } else {
      neutral++;
    }
  });
  console.log(`${(positive / arraySize).toFixed(6)}`);
  console.log(`${(negative / arraySize).toFixed(6)}`);
  console.log(`${(neutral / arraySize).toFixed(6)}`);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
