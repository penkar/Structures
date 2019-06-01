import 'babel-polyfill';
import { BubbleSort, QuickSort, BucketSort, MergeSort, SelectionSort } from '../sorting/index.js'
import { board1, board2, boardValidator} from '../sudoku'
import * as Graph from '../graph'


var assert = require('assert');

var unsorted = [10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,0];
var sorted = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10];

describe ('BubbleSort', () =>{
  it("Should be able to bubblesort...", () =>{
    assert.equal(BubbleSort(unsorted).toString(), sorted.toString());
  });
});

describe ('MergeSort', () =>{
  it("Should be able to mergesort...", () =>{
    assert.equal(MergeSort(unsorted).toString(), sorted.toString());
  });
});

describe ('QuickSort', () =>{
  it("Should be able to quicksort...", () =>{
    assert.equal(QuickSort(unsorted).toString(), sorted.toString());
  });
});

describe ('SelectionSort', () =>{
  it("Should be able to selection...", () =>{
    assert.equal(SelectionSort(unsorted).toString(), sorted.toString());
  });
});

describe ('BucketSort', () =>{
  it("Should be able to BucketSort...", () =>{
    assert.equal(BucketSort(unsorted).toString(), sorted.toString());
  });
});

describe ('Sudoku', () =>{
  it("It should know when a sudoku board is valid.", () =>{
    assert.equal(boardValidator(board1), true);
  });
  it("It should know when a sudoku board is invalid.", () =>{
    assert.equal(boardValidator(board2), false);
  });
});
