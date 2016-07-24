import Node from '../components/linkedListNode.js'
import LinkedList from '../components/linkedList.js'

let assert = require('chai').assert;
const LL = new LinkedList;

describe('LinkedList', () => {
  describe('#typeof()', () => {
    it('Should display a type of LinkedList.', () => {
      assert.equal('LinkedList', typeof(LL));
    });
  });
});

describe('Node', () => {
  describe('#typeof()', () => {
    it('Should display a type of Node.', () => {
      assert.equal('Node', typeof(LL));
    });
  });
});
