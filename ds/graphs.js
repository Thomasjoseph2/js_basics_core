class Graph {
  constructor(params) {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    else return "vertex already exists";
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  printList() {
    for (let v in this.adjacencyList) {
      console.log(v + "=>" + [...this.adjacencyList[v]]);
    }
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) return null;
    delete this.adjacencyList[v];
    for (let vertex in this.adjacencyList) {
      this.adjacencyList[vertex].delete(v);
    }
  }
}

const graph = new Graph();

graph.addVertex("kply");
graph.addVertex("pala");
graph.addVertex("ktym");
graph.addVertex("usa");
graph.addEdge("usa", "ktym");
graph.addEdge("kply", "pala");
graph.addEdge("pala", "usa");

graph.removeVertex("kply");
graph.printList();
