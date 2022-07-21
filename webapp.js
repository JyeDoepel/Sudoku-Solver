function displaySolution(s) {
  console.log(s);
  for (row = 0; row < 9; row++) {
    for (col = 0; col < 9; col++) {
      let id = String(`${row}-${col}`)
      let cell = document.getElementById(id)
      if (s[row][col] == -1) {
        cell.innerHTML = ' '
      } else {
        cell.innerHTML = s[row][col]
      }
    }
  }
}

function fillBoardToSend(b) {
  for (row = 0; row < 9; row++) {
    for (col = 0; col < 9; col++) {
      let id = String(`${row}-${col}`)
      let cell = document.getElementById(id)
      if (cell.innerHTML == ' ') {
        b[row][col] = -1
      } else {
        b[row][col] = parseInt(cell.innerHTML)
      }
    }
  }

  return b
}




function defaultBoard() {
  board = [
      [3, 9, -1,    -1, 5, -1,    -1, -1, -1],
      [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
      [-1, -1, -1,   7, 1, 9,     -1, 8, -1],
      [-1, 5, -1,   -1, 6, 8,     -1, -1, -1],
      [2, -1, 6,    -1, -1, 3,    -1, -1, -1],
      [-1, -1, -1,  -1, -1, -1,   -1, -1, 4],
      [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
      [6, 7, -1,    1, -1, 5,     -1, 4, -1],
      [1, -1, 9,    -1, -1, -1,   2, -1, -1]
      ]

      for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
          let id = String(`${row}-${col}`)

          let cell = document.getElementById(id)

          if (board[row][col] == -1) {
            cell.innerHTML = ' '
          } else {
            cell.innerHTML = board[row][col]
          }


        }
      }

}



function solveSudoku(bord) {
  fetch('http://localhost:3000/home', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "board": bord
    })
  }).then(res => res.json())
  .then(data => displaySolution(data['board']));
}

// let default = [
//     [3, 9, -1,    -1, 5, -1,    -1, -1, -1],
//     [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
//     [-1, -1, -1,   7, 1, 9,     -1, 8, -1],
//     [-1, 5, -1,   -1, 6, 8,     -1, -1, -1],
//     [2, -1, 6,    -1, -1, 3,    -1, -1, -1],
//     [-1, -1, -1,  -1, -1, -1,   -1, -1, 4],
//     [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
//     [6, 7, -1,    1, -1, 5,     -1, 4, -1],
//     [1, -1, 9,    -1, -1, -1,   2, -1, -1]
//     ]
//
// solveSudoku(default)
const width = '50px'
const height = '50px'
const color = 'grey'

for (i = 0; i < 9; i++ ){
  for (k = 0; k < 9; k++) {
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = `left: ${10 + 70*i}px; top: ${100 + 70*k}px; width: ${width}; height: ${height}; background-color: ${color};position: absolute; text-align: center; font-size: 40px; border-style: solid; border-width: 5px; border-radius: 15px;`
    elemDiv.id = `${i}-${k}`
    //elemDiv.style.cssText = 'width:50px;height:50px;background-color:grey;border-style: solid;border-width: 5px;text-align: center;font-size: 45px;display: inline;padding: 20px;';
    document.body.appendChild(elemDiv);
    elemDiv.innerHTML = ' '
  }
}
let cell = document.getElementById('5-2')
console.log(cell);

let clearBtn = document.getElementById('clear')

clearBtn.addEventListener("click", () => {
  console.log('click');
  for (i = 0; i < 9; i++ ){
    for (k = 0; k < 9; k++) {
      let id = String(`${i}-${k}`)

      let cell = document.getElementById(id)

      cell.innerHTML = ' '
    }
  }
  defaultBoard()
});

let solveBtn = document.getElementById('solve')

solveBtn.addEventListener("click", () => {
  console.log('click');
  let sendingBoard = [
      [3, 9, -1,    -1, 5, -1,    -1, -1, -1],
      [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
      [-1, -1, -1,   7, 1, 9,     -1, 8, -1],
      [-1, 5, -1,   -1, 6, 8,     -1, -1, -1],
      [2, -1, 6,    -1, -1, 3,    -1, -1, -1],
      [-1, -1, -1,  -1, -1, -1,   -1, -1, 4],
      [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
      [6, 7, -1,    1, -1, 5,     -1, 4, -1],
      [1, -1, 9,    -1, -1, -1,   2, -1, -1]
      ]
  sendingBoard = fillBoardToSend(sendingBoard)
  console.log(sendingBoard);
  solveSudoku(sendingBoard)




})
