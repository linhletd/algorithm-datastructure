function bfs(graph, root) {
    // Distance object returned
    var nodesLen = {};
    for(let i = 0; i < graph.length; i++){
        nodesLen[i] = Infinity;
    }
    if(graph.length === 1){
        nodesLen = {0: 0}
        return nodesLen;
    }
    let queue = [[root, root]];//store queue of nodes (and their parentnode)
    nodesLen[root] = -1;
    let currentNode;
    function calculateDistance(){
        if(queue.length === 0){
            return;
        }
        currentNode = queue.shift();
        for(let i = 0; i < graph.length; i++){
            if(graph[currentNode[0]][i] && nodesLen[i] == Infinity){
                queue.push([i, currentNode[0]]);
            }
        }
        nodesLen[currentNode[0]] = nodesLen[currentNode[1]] + 1;
        calculateDistance();
    }
    calculateDistance();
    return nodesLen;
  };
  
  var exBFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(bfs(exBFSGraph, 3));
  