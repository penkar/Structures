export default class Graph {
  constructor(verticieCount = 0) {
    this.verticiesCount = verticieCount;
    this.adjacentList = new Map();
  }

  addVertice(vertice) {
    this.verticiesCount++
    this.adjacentList.set(vertice, new Set());
  }

  addEdge(edge1, edge2, directed = false) {
    if(edge1 === edge2) return null;

    if(!this.adjacentList.has(edge1)) this.addVertice(edge1);
    this.adjacentList.get(edge1).add(edge2);

    if(!this.adjacentList.has(edge2)) this.addVertice(edge2);
    if(!directed) this.adjacentList.get(edge2).add(edge1);
  }

  getEdgesForVerticie(vertice) {
    return this.adjacentList.get(vertice);
  }

  printVerticies() {
    return [...this.adjacentList.keys()]
  }

  breadthFirstSearch(start, end) {
  }

  depthFirstSearch(start, end) {
  }
}
