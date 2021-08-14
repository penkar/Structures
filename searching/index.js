import {assert} from 'chai';
import BinarySort from './binarysearch/component/search.js';
import InterpolationSearch from './interpolationsearch/component/search.js';

const emptyArray = [],
  length1 = [1],
  length10 = [0,1,2,3,4,5,6,7,8,9];

describe('InterplationSort', () => {
  it("Interpolation search should return false if searching through an empty array.", () => {
    assert.equal(InterpolationSearch([],1), false);
  });

  it("Interpolation search should return false if the requested term is not contained within.", () => {
    assert.equal(InterpolationSearch(length10, 11), false);
  });

  it("Interpolation search should return false if the requested term is not contained.", () => {
    assert.equal(InterpolationSearch(length10, 0), 0);
    assert.equal(InterpolationSearch(length10, 1), 1);
    assert.equal(InterpolationSearch(length10, 2), 2);
    assert.equal(InterpolationSearch(length10, 3), 3);
    assert.equal(InterpolationSearch(length10, 4), 4);
    assert.equal(InterpolationSearch(length10, 5), 5);
    assert.equal(InterpolationSearch(length10, 6), 6);
    assert.equal(InterpolationSearch(length10, 7), 7);
    assert.equal(InterpolationSearch(length10, 8), 8);
    assert.equal(InterpolationSearch(length10, 9), 9);
    assert.equal(InterpolationSearch(length10, 10), false);
  });

  it("Should be able to find the position of an integer in when useing a random number.", () => {
    let array = new Set();
    for(let i = 0; i < 1000; i++) {
      array = array.add(parseInt(Math.random() * 10000));
    }
    function sortNumber(a, b) {
      return a - b;
    }
    let newarray = [...array].sort(sortNumber);
    for(let i = 1; i < 1000; i++) {
      let position = newarray.indexOf(i);
      if(position === -1) position = false;

      assert.equal(InterpolationSearch(newarray, i), position);
    } 
  })
});

describe ('BinarySort', () => {
  it("Binary search should return false if searching through an empty array.", () => {
    assert.equal(BinarySort([], 1), false);
  });
  
  it("Binary search should return false if the requested term is not contained.", () => {
    assert.equal(BinarySort(length10, 11), false);
  });

  it("Binary search should return false if the requested term is not contained.", () => {
    assert.equal(BinarySort(length10, 0), 0);
    assert.equal(BinarySort(length10, 1), 1);
    assert.equal(BinarySort(length10, 2), 2);
    assert.equal(BinarySort(length10, 3), 3);
    assert.equal(BinarySort(length10, 4), 4);
    assert.equal(BinarySort(length10, 5), 5);
    assert.equal(BinarySort(length10, 6), 6);
    assert.equal(BinarySort(length10, 7), 7);
    assert.equal(BinarySort(length10, 8), 8);
    assert.equal(BinarySort(length10, 9), 9);
    assert.equal(BinarySort(length10, 10), false);
  });

  it("Should be able to find the position of an integer in when useing a random number.", () => {
    let array = new Set();
    for(let i = 0; i < 1000; i++) {
      array = array.add(parseInt(Math.random() * 10000));
    }
    function sortNumber(a, b) {
      return a - b;
    }
    let newarray = [...array].sort(sortNumber);
    for(let i = 1; i < 1000; i++) {
      let position = newarray.indexOf(i);
      if(position === -1) position = false;
      assert.equal(BinarySort(newarray, i), position);
    }
  })
});