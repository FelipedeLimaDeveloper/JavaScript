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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let major;
  for (let line = 0; line < 4; line++) {
    for (let colun = 0; colun < 4; colun++) {
      let sum = arr[line][colun] + arr[line][colun + 1] + arr[line][colun + 2];
      sum += arr[line + 1][colun + 1];
      sum +=
        arr[line + 2][colun] +
        arr[line + 2][colun + 1] +
        arr[line + 2][colun + 2];

      if ((line === 0 && colun === 0) || sum > major) {
        major = sum;
        console.log(major);
      }
    }
  }

  return major;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  ws.write(result + '\n');

  ws.end();
}
