const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const yourScore = document.querySelector('[data-your-score]');
const computerScore = document.querySelector('[data-computer-score]');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors',
  },
  {
    name: 'paper',
    emoji: '🖐',
    beats: 'rock',
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper',
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener('click', () => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelectionName(selection);
  });
});

function makeSelectionName(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);
  if (yourWinner) incrementScore(yourScore);
  if (computerWinner) incrementScore(computerScore);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
