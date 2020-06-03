'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  let mostFrequently = {
    type: -1,
    quantity: -1,
  };
  let types = [0, 0, 0, 0, 0];
  //calculate de frequency of each bird type
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      types[0]++;
    } else if (arr[i] === 2) {
      types[1]++;
    } else if (arr[i] === 3) {
      types[2]++;
    } else if (arr[i] === 4) {
      types[3]++;
    } else {
      types[4]++;
    }
  }
  //get most frequently bird type
  for (let i = 0; i < types.length; i++) {
    if (types[i] > mostFrequently.quantity) {
      mostFrequently.type = i + 1;
      mostFrequently.quantity = types[i];
    }
  }
  return mostFrequently.type;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + '\n');

  ws.end();
}
