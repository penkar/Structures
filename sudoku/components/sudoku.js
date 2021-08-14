import { board1 } from './board.js';

const boardValidator = (board) => {
  const Validate = (num) => (45 !== num);
  board.forEach((row) => {
    let value = row.reduce((x,y) => (x+y))
    if(Validate(value)) return false;
  });
  for(var i = 0; i < 9; i++) {
    let row = [board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], board[5][i], board[6][i], board[7][i], board[8][i]]
    let value = row.reduce((x,y) => (x+y))
    if(Validate(value)) return false;
  }
  for(var j = 0; j < 9; j += 3) {
    for(var k = 0; k < 9; k+= 3 ) {
      let row = [
        board[k  ][j], board[k][j+1],   board[k][j+2],
        board[k+1][j], board[k+1][j+1], board[k+1][j+2],
        board[k+2][j], board[k+2][j+1], board[k+2][j+2],
      ]
      let value = row.reduce((x,y) => (x+y))
      if(Validate(value)) return false;
    }
  }
  return true;
}

export default boardValidator
