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

// Complete the staircase function below.
function staircase(n) {
  let param = n;
  let resultLine = '';
  //concat each result in resultLine
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j < param) {
        resultLine += ' ';
      } else {
        resultLine += '#';
      }
    }
    console.log(resultLine);
    resultLine = '';
    param--;
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}
