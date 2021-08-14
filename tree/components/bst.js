class Node {
  constructor(value) {
    this._value = value;
    this.left = undefined;
    this.right = undefined;
  }

  value = () => {
    return this._value
  }
}

class BinarySearchTree {
  constructor(defaults=[]) {
    this._head = undefined;
    for (let i = 0; i < defaults.length; i++) {
      this.addNode(defaults[i]);
    }
  }

  addNode = (value) => {
    /* Function will add a node to the Binary Search Tree. */
    if (this._head === undefined) {
      this._head = new Node(value)
      return
    }
    let head = this._head;
    while (head !== value) {
      if (head.value() === value) {
        return
      } else if (head.value() > value) {
        if (head.left === undefined) {
          head.left = new Node(value);
          return
        } else {
          head = head.left;
        }
      } else {
        if (head.right === undefined) {
          head.right = new Node(value);
          return
        } else {
          head = head.right;
        }
      }
    }
  }

  findNode = (value) => {
    /* Function will return true if a node exists within a tree, and false otherwise. */
    let head = this._head;

    while (head?.value() !== value) {
      if (head.value() > value) {
        if (head.left === undefined) {
          return false 
        }
        head = head.left
      } else {
        if (head.right === undefined) {
          return false 
        }
        head = head.right
      }
    }
    return true;
  }

  getTop = () => {
    /* Function will return the head node of the BST. */
    return this._head?.value();
  }

  bfs = () => {
    /*  Function will perform a Breadth first search, and return an array of the results 
        in the order in which they were visited. It will start at the head, then visit
        the lower results before the higher. The current node's child will be exhausted
        before visiting further down the tree. */
    const q = [], nodes = [];
    function dfsHelper(top) {
      nodes.push(top.value());
      if (top.left) q.push(top.left);
      if (top.right) q.push(top.right);
    };
    if (this._head === undefined) {
      return nodes
    } else {
      dfsHelper(this._head)
    }
    while (q.length > 0) {
      dfsHelper(q.shift());
    }
    return nodes;
  }

  dfs = () => {
    /*  Function will perform a depth first search, and return an array of the results
        in the order visited. Each node's lower children will be exhausted before moving
        to the higher children. */
    const stack = [], nodes = [];
    function dfsHelper(top) {
      nodes.push(top.value());
      if (top.right) stack.push(top.right);
      if (top.left) stack.push(top.left);
    };
    if (this._head === undefined) {
      return nodes
    } else {
      dfsHelper(this._head)
    }
    while (stack.length > 0) {
      dfsHelper(stack.pop());
    }
    return nodes;
  }
};
