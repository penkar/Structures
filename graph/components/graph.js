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
    return [...this.adjacentList.keys()];
  }

  breadthFirstSearch(start, end) {
    let visited = new Object(), 
      queue = [start], 
      current = start, 
      path = [], 
      setup = new Map(),
      connected = false;
    for(let i of this.printVerticies()) visited[i] = false;

    while(queue.length) {
      if(current === end) {
        connected = true;
        break;
      }

      visited[current] = true;
      let currentVerticies = this.getEdgesForVerticie(current);

      for(let j of currentVerticies) {
        setup.set(j, current);
        if(visited[j] === false) queue.push(j); 
      }
      [current, ...queue] = queue;
    }

    if(connected) {
      while(current && current != start) {
        path.push(current);
        current = setup.get(current);
      }
      path.push(start);
      return path;
    } else {
      return false;
    }
  }

  depthFirstSearch(start, end) {
    let path = [], queue = [], current = start, setup = new Map(), connected = false;
    while(current) {
      let currentVerticies = this.getEdgesForVerticie(current);
      if(current === end) {
        connected = true;
        break;
      }
      for(let i of currentVerticies) setup.set(i, current);

      queue = [...currentVerticies, ...queue];
      [current, ...queue] = queue;
    }

    if(connected) {
      while(current && current != start) {
        path.push(current);
        current = setup.get(current);
      }
      path.push(start);
      return path;
    } else {
      return false;
    }
  }
}
