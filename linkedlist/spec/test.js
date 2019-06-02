import {assert} from 'chai';
import Node from '../components/linkedListNode.js';
import LinkedList from '../components/linkedList.js';

const LL = new LinkedList;
let a = new Node('a'), b = new Node('b'), c = new Node('c'), d = new Node('d'), e = new Node('e'), f = new Node('f');

describe('LinkedList setup.', () => {
  it('Should display a type of LinkedList.', () => {
    assert.equal('object', typeof(LL));
  });
  it('Should have null / zero values for head, tail and length.', () => {
    assert.equal(0, LL._length);
    assert.equal(null, LL._head);
    assert.equal(null, LL._tail);
  })
});

describe('Node', () => {
  describe('Nodes and node insertions into the linked list.', () => {
    it('Should display a type of Node.', () => {
      assert.equal('object', typeof(LL));
    });
    it("Should initialize with no head or tail, just a value.", () => {
      let node = new Node();
      assert.equal(node._next, null);
      assert.equal(node._previous, null);
      assert.equal(node._value, undefined);
    })
    it("Should initialize with a value if one is given.", () => {
      let node = new Node('a');
      assert.equal(node._next, null);
      assert.equal(node._previous, null);
      assert.equal(node._value, 'a');
    });
    it("Should contain the first node as a head, and the last node given as the tail.", () => {
      LL.add(a); LL.add(b); LL.add(c); LL.add(d); LL.add(e); LL.add(f);
      assert.equal(LL.len(), 6);
      assert.equal(LL._head._value, 'a');
      assert.equal(LL._tail._value, 'f');
    });
    it("Popping a node should remove the last node from the list.", () => {
      LL.pop();
      assert.equal(LL.len(), 5);
      assert.equal(LL._head._value, 'a');
      assert.equal(LL._tail._value, 'e');
    });
    it("You should be able to search for a node by value.", () => {
      let node = LL.search('c');
      assert.equal(node._value, 'c');
      assert.equal(node._next._value, 'd');
      assert.equal(node._previous._value, 'b');
    });
    it("Removing a node should set a new length and tail.", () => {
      LL.remove('b');
      assert.equal(LL.len(), 4);
      assert.equal(LL._head._value, 'a');
      assert.equal(LL._tail._value, 'e');
    });
    it("You should not be able to find a node once it has been removed.", () => {
      assert.equal(LL.search('b'), null)
    })
  });
});
