// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.


const twoSum = function(n, edges, source, destination) {
    let graph = new Map()
    let visited = new Set()
   
    for(let [v,e] of edges){
      if(graph.has(v)){
        graph.get(v).push(e)
      }else{
        graph.set(v,[e])
      }
      if(graph.has(e)){
        graph.get(e).push(v)
      }else{
        graph.set(e,[v])
      }
    }
    function dfs(vertex){
      visited.add(vertex)
   
      let nebourghs = graph.get(vertex)
      if(nebourghs && nebourghs.length>0){
        for(let i=0; i<nebourghs.length;i++){
          if(!visited.has(nebourghs[i])){
            dfs(nebourghs[i])
          }
        }
      }
    }
    dfs(source)
    return visited.has(destination)
   }
   
   console.log(twoSum(10,[[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]],7,5))