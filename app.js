function checkGuess(guess, board, row, col) {
  for (let i = 0; i < 9; i++) {
    if (guess == board[row][i]) {

      return false
    }
  }
  let column = []
  for (let i = 0; i < 9; i++) {
    if (guess == board[i][col]) {
      return false
    }
  }
  let rowStart = Math.floor(row / 3) * 3
  let colStart = Math.floor(col / 3) * 3
  for (let r = rowStart; r < rowStart + 3; r++) {
    for (let c = colStart; c < colStart + 3; c++) {
      if (board[r][c] == guess) {

        return false
      }
    }
  }
  return true
}


// Finds the next empty space in puzzle to solve
function next_empty(board) {
  for (let row = 0; row < 9; row++ ) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] == -1) {
        return [row, col]
      }
    }
  }
  return [69, 420]
}


// Master sudoku solving function, Returns true is puzzle was solved
function sudoku(board) {
  let index = next_empty(board)
  if (index[0] == 69) {
    return true;
  }
  let row = index[0]
  let col = index[1]
  for (let guess = 1; guess < 10; guess++) {
    if (checkGuess(guess, board, row, col)) {
      board[row][col] = guess
      if (sudoku(board)) {
        return true;
      }
    }
    board[row][col] = -1
  }
  return false;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







function proccesIncomingData(data) {
  exboard = data['board'];
  return exboard;
}


const express = require('express');

const app = express();
app.use(express.json())

app.get('/home', (req, res) => {
  res.send('API Is Live!');
});

app.post('/home', (req,res) => {
  input = req.body;
  let exboard = proccesIncomingData(input)
  console.log(sudoku(exboard))
  console.log(exboard);

  output = {
    "board": exboard
  }

  res.json(output)
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
