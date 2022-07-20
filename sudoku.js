// Validates that the guess obeys rules of sudoku
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

function main() {
  let exboard = [
    [3, 9, -1,   -1, 5, -1,   -1, -1, -1],
    [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
    [-1, -1, -1,   7, 1, 9,   -1, 8, -1],
    [-1, 5, -1,   -1, 6, 8,   -1, -1, -1],
    [2, -1, 6,   -1, -1, 3,   -1, -1, -1],
    [-1, -1, -1,   -1, -1, -1,   -1, -1, 4],
    [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
    [6, 7, -1,   1, -1, 5,   -1, 4, -1],
    [1, -1, 9,   -1, -1, -1,   2, -1, -1]
    ]
  console.log(exboard);
  console.log(sudoku(exboard));
  console.log(exboard);
}

main()
