import {assert} from 'chai';
import bst from './components/bst.js';

describe ('Binary Search Tree tests', () =>{
  let bst = new BinarySearchTree()
  it("If no values are submitted to the BST, it should have an undefined head.", () =>{
    assert(bst.getTop() === undefined)
  });
  bst = new BinarySearchTree([5,2,1,3,7,6,8])
  it("It should know when a sudoku board is valid.", () =>{

  });
  it("It should know when a sudoku board is invalid.", () =>{

  });
});




// console.log("TESTS")
// let bst = new BinarySearchTree([3,1,5])
// console.log(bst)
// console.log("BST Will find nodes that exist in tree.")
// console.log(bst.findNode(3), bst.findNode(1), bst.findNode(5))

// console.log("BST Will not find nodes that do not exist in tree.")
// console.log(bst.findNode(3+1), bst.findNode(1+1), bst.findNode(5+1))

// bst = new BinarySearchTree([5,2,1,3,7,6,8])
// console.log("Breadth First Search will return appropriate results.")
// console.log(bst.dfs())
// console.log("Corect Ans: ", [5,2,1,3,7,6,8])
// console.log(bst.bfs())
// console.log("Corect Ans: ", [5,2,7,1,3,6,8])