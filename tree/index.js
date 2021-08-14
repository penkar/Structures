import {assert} from 'chai';
import BinarySearchTree from './components/bst.js';

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
