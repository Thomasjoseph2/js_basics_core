const { values } = require("lodash");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = new Set();
    else return "v already exists";
  }
  addEdges(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }
  print() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " ==> " + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }
  deleteVertex(vertex){
    if(this.adjacencyList[vertex]){
        delete this.adjacencyList[vertex]
    }
    for(const v in this.adjacencyList){
        this.adjacencyList[v].delete(vertex)
    }
  }
}

const graph = new Graph();

graph.addVertex("kollam");
graph.addVertex("kottayam");
graph.addVertex("kozhikkod");
graph.addVertex("kottarakkara");

graph.addEdges("kollam", "kozhikkod");
graph.addEdges("kottayam", "kottarakkara");
graph.addEdges("pala", "kottayam");
graph.addEdges("pala", "kollam");
graph.addEdges("kozhikkod", "kottayam");
graph.addEdges("pala", "kottayam");

graph.removeEdge("pala", "kottayam");
graph.deleteVertex("pala");

graph.print();
