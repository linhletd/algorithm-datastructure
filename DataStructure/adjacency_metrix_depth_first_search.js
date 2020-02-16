function dfs(graph, root) {
    if(graph.length === 0){
      return null;
    }
    let result = [root];
    function reach(parentNode = root){
      for(let i = 0; i < graph.length; i++){
        if(graph[parentNode][i] && result.indexOf(i) === -1){
          result.push(i);
          reach(i);
        }
      }
    }
    reach();
    return result
  }
  
  var exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(dfs(exDFSGraph, 3));
  