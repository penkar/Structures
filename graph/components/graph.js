export default class Graph {
  adjacentList = new Map();
  verticiesCount = 0;
  getEdgesForVerticie = (vertice) => this.adjacentList.get(vertice);
  printVerticies = () => [...this.adjacentList.keys()];

  addVertice(vertice) {
    this.verticiesCount++
    this.adjacentList.set(vertice, new Set());
  }

  addEdge(edge1, edge2, directed = false) {
    if(edge1 !== edge2) {
      if(!this.adjacentList.has(edge1)) this.addVertice(edge1);
      this.adjacentList.get(edge1).add(edge2);
      if(!this.adjacentList.has(edge2)) this.addVertice(edge2);
      if(!directed) this.adjacentList.get(edge2).add(edge1);
    }
  }

  breadthFirstSearch = (start, end) => this.search(start, end, true);
  depthFirstSearch = (start, end) => this.search(start, end, false);
  search(start, end, breadthFirst) {
    let visited = new Object(), path = [], queue = [start], current = start, setup = new Map(), connected = false;
    while(current) {
      let currentVerticies = this.getEdgesForVerticie(current);
      visited[current] = true;
      if(current === end) {
        connected = true;
        break;
      }
      for(let i of currentVerticies) setup.set(i, current);
      if(breadthFirst) {
        queue = [...queue, ...currentVerticies].filter((x) => (!visited[x]));
      } else {
        queue = [...currentVerticies, ...queue].filter((x) => (!visited[x]));
      }
      [current, ...queue] = queue;
    }
    if(!connected) return false;
    while(current && current != start) {
      path.push(current);
      current = setup.get(current);
    }
    return [...path, start];
  }
}
