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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let sum = 0;
  let major = 0,
    minor = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i === 0) {
      major = arr[i];
      minor = arr[i];
    } else {
      if (major < arr[i]) {
        major = arr[i];
      }
      if (minor > arr[i]) {
        minor = arr[i];
      }
    }
  }
  console.log(sum - major, sum - minor);
}

function main() {
  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
