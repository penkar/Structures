import 'babel-polyfill';
import { BubbleSort, QuickSort, BucketSort, MergeSort } from '../sorting/index.js'



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

describe ('BucketSort', () =>{
  it("Should be able to BucketSort...", () =>{
    assert.equal(BucketSort(unsorted).toString(), sorted.toString());
  });
});