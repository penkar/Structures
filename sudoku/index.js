import {assert} from 'chai';
import {board1, board2} from './components/board.js';
import boardValidator from './components/sudoku.js';

describe ('Sudoku', () => {
  it("It should know when a sudoku board is valid.", () => {
    assert.equal(boardValidator(board1), true);
  });
  it("It should know when a sudoku board is invalid.", () => {
    assert.equal(boardValidator(board2), false);
  });
});
