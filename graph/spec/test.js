import Graph from '../components/graph.js';

let assert = require('chai').assert;

describe('Basic Graph Construction', () => {
  const simpleGraph = new Graph();
  describe('Graph Creation', () => {
    it('Should be a type of object.', () => {
      assert.equal('object', typeof(simpleGraph));
    });
    it('Should be able to contain vertices', () => {
      simpleGraph.addVertice('a');
      assert.equal(1, simpleGraph.verticiesCount);
      simpleGraph.addVertice('b');
      simpleGraph.addVertice('c');
      simpleGraph.addVertice('d');
      assert.equal(4, simpleGraph.verticiesCount);
    });
    it('Shoule be able to contain edges.', () => {
      simpleGraph.addEdge('a', 'b');
      simpleGraph.addEdge('a', 'c');
      assert.equal(simpleGraph.getEdgesForVerticie('a').size, 2)
    });
    it('Duplicate edges should not bother it.', () => {
      simpleGraph.addEdge('a', 'd');
      simpleGraph.addEdge('a', 'd');
      simpleGraph.addEdge('a', 'd');
      assert.equal(simpleGraph.getEdgesForVerticie('a').size, 3)
    });
    it('You should not be able to add the same verticie as its own edge..', () => {
      simpleGraph.addEdge('a', 'a');
      assert.equal(simpleGraph.getEdgesForVerticie('a').size, 3)
    });
    it('Edge lists should have the correct verticies.', () => {
      let a = simpleGraph.getEdgesForVerticie('a');
      assert.equal(a.has('b'), true);
      assert.equal(a.has('c'), true);
      assert.equal(a.has('d'), true);
      assert.equal(a.has('a'), false);
      assert.equal(a.has('f'), false);
      let b = simpleGraph.getEdgesForVerticie('b');
      assert.equal(b.has('d'), false);
      assert.equal(b.has('a'), true);
    });
    it('Directed edges should just appear once between two verticies.', () => {
      simpleGraph.addEdge('a', 'z', true);
      assert.equal(simpleGraph.getEdgesForVerticie('z').size, 0);
      assert.equal(simpleGraph.getEdgesForVerticie('a').size, 4);
    })
  });

  const SCG = new Graph();
  SCG.addEdge('a', 'b', true);
  SCG.addEdge('a', 'c', true);
  SCG.addEdge('a', 'd', true);
  SCG.addEdge('a', 'e', true);
  SCG.addEdge('a', 'f', true);
  SCG.addEdge('b', 'g', true);
  SCG.addEdge('b', 'h', true);
  SCG.addEdge('b', 'i', true);
  SCG.addEdge('b', 'j', true);
  SCG.addEdge('j', 'k', true);
  SCG.addEdge('k', 'l', true);
  SCG.addEdge('a', 'l', true);
  describe('Graph should be able to perform a depth first search.', function() {
    it('Should be able to conduct a Breadth First Search for a directed graph.', () => {
      assert.equal(JSON.stringify(['l', 'a']), JSON.stringify(SCG.breadthFirstSearch('a', 'l')));
      assert.equal(JSON.stringify(['k','j','b','a']), JSON.stringify(SCG.breadthFirstSearch('a', 'k')));
    });
    it('Should return false when nodes are not connected.', () => {
      assert.equal(false, SCG.breadthFirstSearch('a', 'z'));
    });
  });

  describe('Graph should be able to perform a depth first search.', function() {
    it('Should return a depth first path.', () => {
      assert.equal(JSON.stringify(['l','k','j','b','a']), JSON.stringify(SCG.depthFirstSearch('a', 'l')));
      assert.equal(JSON.stringify(['c','a']), JSON.stringify(SCG.depthFirstSearch('a', 'c')));
    });
    it('Should return a falsey path when appropriate.', () => {
      assert.equal(false, SCG.depthFirstSearch('a', 'z'));
    });
  })
});

