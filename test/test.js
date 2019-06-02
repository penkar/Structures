import 'babel-polyfill';
import { BubbleSort, QuickSort, BucketSort, MergeSort, SelectionSort, InsertionSort } from '../sorting/index.js'
import { board1, board2, boardValidator} from '../sudoku'
import * as Graph from '../graph'


const assert = require('assert');

const unsorted = [10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,0];
const sorted = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10];
const randomUnsorted = new Array(2000);
randomUnsorted.map((x) => Math.floor(Math.random() * 10000));
const randomSorted = randomUnsorted.sort();

describe ('BubbleSort', () =>{
  it("Should be able to bubblesort using the standard 20 point array.", () =>{
    assert.equal(BubbleSort(unsorted).toString(), sorted.toString());
  });
  it("Should be able to bubblesort using the nonstandard unsorted array.", () =>{
    assert.equal(BubbleSort(randomUnsorted).toString(), randomSorted.toString());
  });
});

describe ('MergeSort', () =>{
  it("Should be able to mergesort using the standard 20 point array.", () =>{
    assert.equal(MergeSort(unsorted).toString(), sorted.toString());
  });
  it("Should be able to mergesort using the nonstandard unsorted array.", () =>{
    assert.equal(MergeSort(randomUnsorted).toString(), randomSorted.toString());
  });
});

describe ('QuickSort', () =>{
  it("Should be able to quicksort using the standard 20 point array.", () =>{
    assert.equal(QuickSort(unsorted).toString(), sorted.toString());
  });
  it("Should be able to quicksort using the nonstandard unsorted array.", () =>{
    assert.equal(QuickSort(randomUnsorted).toString(), randomSorted.toString());
  });
});

describe ('SelectionSort', () =>{
  it("Should be able to selection using the standard 20 point array.", () =>{
    assert.equal(SelectionSort(unsorted).toString(), sorted.toString());
  });
  it("Should be able to selection using the nonstandard unsorted array.", () =>{
    assert.equal(SelectionSort(randomUnsorted).toString(), randomSorted.toString());
  });
});

describe ('BucketSort', () =>{
  it("Should be able to BucketSort using the standard 20 point array.", () =>{
    assert.equal(BucketSort(unsorted).toString(), sorted.toString());
  });
  it("Should be able to BucketSort using the nonstandard unsorted array.", () =>{
    assert.equal(BucketSort(randomUnsorted).toString(), randomSorted.toString());
  });
});

describe ('InsertionSort', () =>{
  it("Should be able to InsertionSort using the standard 20 point array.", () =>{
    assert.equal(InsertionSort(unsorted).toString(), sorted.toString());
  });
  it("Should be able to InsertionSort using the nonstandard unsorted array.", () =>{
    assert.equal(InsertionSort(randomUnsorted).toString(), randomSorted.toString());
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
