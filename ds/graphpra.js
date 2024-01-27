class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    else console.log('vertex already exists');
  }
  addEdge(v1,v2){
    if(!this.adjacencyList[v1])this.addVertex(v1)
    if(!this.adjacencyList[v2])this.addVertex(v2)
    this.adjacencyList[v1].add(v2)
    this.adjacencyList[v2].add(v1)
  }
  display(){
    for(let vertex in this.adjacencyList){
        console.log(vertex + " => "+ [...this.adjacencyList[vertex]])
    }
  }
  removeEdge(v1,v2){
    this.adjacencyList[v1].delete(v2)
    this.adjacencyList[v2].delete(v1)
  }
  removeVertex(vertex){
    if(!this.adjacencyList[vertex]) return null;
    delete this.adjacencyList[vertex];
    for(let v in this.adjacencyList){
      this.adjacencyList[v].delete(vertex)
    }
  }
}

const graph=new Graph()
graph.addVertex("kply");
graph.addVertex("pala");
graph.addVertex("ktym");
graph.addVertex("usa");
graph.addEdge("usa", "ktym");
graph.addEdge("kply", "pala");
graph.addEdge("pala", "usa");
graph.removeEdge("kply","pala")

graph.display()



