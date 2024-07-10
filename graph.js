// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] =new Set()
//       }
//     } // Time: O(1) | Space: O(1)
  
//     addEdges(vertex1, vertex2) {
//       this.addVertex(vertex1);
//       this.addVertex(vertex2);
  
//       this.adjacencyList[vertex1].add(vertex2);
//       this.adjacencyList[vertex2].add(vertex1);
//     } // Time: O(1) | Space: O(1)
  
//     removeEdge(vertex1, vertex2) {
//       this.adjacencyList[vertex1].delete(vertex2);
//       this.adjacencyList[vertex2].delete(vertex1);
//     } // Time: O(1) | Space: O(1)
  
//     removeVertex(vertex) {
//       for (let neighbor of this.adjacencyList[vertex]) {
//         this.removeEdge(vertex, neighbor);
//       }
//       delete this.adjacencyList[vertex];
//     } // Time: O(n) number of neighbors | Space: O(1)
  
//     //DFS
//     depthFirstRecursive(start) {
//       const visited = {};
//       const result = [];
//       const adjacencyList1 = this.adjacencyList;
  
//       (function dfs(vertex) {
//         visited[vertex] = true;
//         result.push(vertex);
  
//         adjacencyList1[vertex].forEach((neighbor) => {
//           if (!visited[neighbor]) return dfs(neighbor);
//         });
//       })(start);
  
//       return result;
//     }
  
//     //BFS
//     bfs(vertex) {
//       let visited = {};
//       let data = [];
//       let queue = [vertex];
  
//        // Mark the starting vertex as visited
  
//       while (queue.length) {
//         visited[vertex] = true;
//           let curr = queue.shift();
//           data.push(curr);
  
//           for (let neighbor of this.adjacencyList[curr]) {
//               if (!visited[neighbor]) {
//                   queue.push(neighbor);
//                   visited[neighbor] = true;
//               }
//           }
//       }
  
//       return data;
//   }
//   }


class Graph{
  constructor(){
    this.adjanceylist={}
  }

  addVertex(vertex){
    if(!this.adjanceylist[vertex]){
      this.adjanceylist[vertex]=new Set()
    }
  
  }
  addEdges(v1,v2){
    this.addVertex(v1)
    this.addVertex(v2)
    this.adjanceylist[v1].add(v2)
    this.adjanceylist[v2].add(v1)
  }
  removeEdges(v1,v2){
    this.adjanceylist[v1].delete(v2)
    this.adjanceylist[v2].delete(v1)
  }
  removeVertex(vertex){
    for(let neighbor of this.adjanceylist[vertex]){
      this.removeEdges(vertex,neighbor)
    }
    delete this.adjanceylist[vertex]
  }

  dfs(vertex){
    let visited={}
    let data=[]
    let adjacencyList1=this.adjanceylist;
    (function dfsh(v){
      visited[v]=true
      data.push(v)
      adjacencyList1[v].forEach((neighbor) => {
        if(!visited[neighbor]){
          return dfsh(neighbor)
        }
      });
    })(vertex)
     
    return data
  }
}
  
  const graph = new Graph();

  graph.addEdges("A", "B");
  graph.addEdges("B", "C");
  graph.addEdges("C", "A");
  console.log(graph.dfs('A'));
  
  console.log(graph);
