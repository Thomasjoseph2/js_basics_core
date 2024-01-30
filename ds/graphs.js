class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    else return "vertex already exists";
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[ v1].add(v2);
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

  dfsRecurssive(){
    
  }
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")


graph.printList()