import { assert } from 'chai';
import BinarySearchTree from './components/bst.js';
import Heap from './components/minheap.js';
import MinHeap from './components/minheap.js';

describe ('Min Heap tests', () => {
  const minHeap1 = new MinHeap();
  it("If nothing is present in the min-heap it should return null.", () => {
    assert(minHeap1.peek() === null);
  });

  it("Otherwise, it should return the first value in the underlying array.", () => {
    minHeap1.add(99);
    assert(minHeap1.peek() === 99);
  });

  it("Should add numbers in a way suitable for a min-heap.", () => {
    minHeap1.add(1);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,99]));
    minHeap1.add(88);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,99,88]));
    minHeap1.add(22);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,22,88,99]));
    minHeap1.add(33);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,22,88,99,33]));
    minHeap1.add(100);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,22,88,99,33,100]));
    minHeap1.add(9);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,22,9,99,33,100,88]));
    minHeap1.add(0);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([0,1,9,22,33,100,88,99]));
  });

  it("Should initialize properly with an array of values.", () => {
    const minHeap = new MinHeap([99,1,88,22,33,100,9,0]);
    assert(JSON.stringify(minHeap.stack) === JSON.stringify([0,1,9,22,33,100,88,99]));
  });

  it("Should properly remove the min, and reorder the remaining heap.", () => {
    assert(minHeap1.getMin() === 0);
    assert(JSON.stringify(minHeap1.stack) === JSON.stringify([1,22,9,99,33,100,88]));
  });

  it("Addl test:", () => {
    const arr = [0,0,2,1,3,4,5,2,1,3,4,5,6,7,8,6,2,2,5,8,5,6,4,9,5,7,6,7,7,9,8,9,9,5,3,3];
    const arrEnd = [0,1,2,1,3,4,5,2,2,3,4,5,6,7,8,6,2,3,5,8,5,6,4,9,5,7,6,7,7,9,8,9,9,5,3];
    const minHeap = new Heap(arr);
    assert(JSON.stringify(minHeap.stack) === JSON.stringify(arr));
    assert(minHeap.getMin() === 0);
    assert(JSON.stringify(minHeap.stack) === JSON.stringify(arrEnd));
  });
});

describe ('Binary Search Tree tests', () => {
  const bst1 = new BinarySearchTree()
  it("If no values are submitted to the BST, it should have an undefined head.", () => {
    assert(bst1.getTop() === undefined);
  });

  it("If a value has been added, it should appear on top.", () => {
    bst1.addNode(1000);
    assert(bst1.getTop() === 1000);
  });

  const bst2 = new BinarySearchTree([5,2,1,3,7,6,8])
  it("BST Should find nodes that exist in the graph.", () => {
    assert(bst2.findNode(5))
    assert(bst2.findNode(2))
    assert(bst2.findNode(1))
    assert(bst2.findNode(3))
    assert(bst2.findNode(7))
    assert(bst2.findNode(8))
    assert(bst2.findNode(6))
    assert(bst2.findNode(5 * 100) === false)
    assert(bst2.findNode(2 * 100) === false)
    assert(bst2.findNode(1 * 100) === false)
    assert(bst2.findNode(3 * 100) === false)
    assert(bst2.findNode(7 * 100) === false)
    assert(bst2.findNode(8 * 100) === false)
    assert(bst2.findNode(6 * 100) === false)
  });

  it("BST should retun correct results for BFS.", () => {
    let results = bst2.bfs();
    let answer = [5,2,7,1,3,6,8];
    for(let i = 0; i < results.length; i++) {
      assert( results[i] === answer[i]);
    }
  });

  it("BST should retun correct results for DFS.", () => {
    let results = bst2.dfs();
    let answer = [5,2,1,3,7,6,8];
    for(let i = 0; i < results.length; i++) {
      assert( results[i] === answer[i]);
    }
  });
});
