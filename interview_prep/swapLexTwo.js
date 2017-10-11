function Node(val){
  this.value = val;
  this.edges = [];
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
};



function Graph(){
  this.vertices = {};
  this.vertArr = [];
}

Node.prototype.addEdge = function (newVertex) {
  this.edges.push(newVertex);
  newVertex.edges.push(this);
};

Graph.prototype.addVertex = function (vertex){
  let val = vertex.value;
  this.vertices[val] = vertex;
  this.vertArr.push(val);
};

function buildGraph(arr){
  let graph = new Graph();
  for (let i = 0; i < arr.length; i++){
    let nodeOneVal = arr[i][0];
    let nodeTwoVal = arr[i][1];
    let nodeOne = graph.vertices[nodeOneVal] ? graph.vertices[nodeOneVal]
                                                 : new Node(nodeOneVal);
    let nodeTwo = graph.vertices[nodeTwoVal] ? graph.vertices[nodeTwoVal]
                                                : new Node(nodeTwoVal);
    nodeOne.addEdge(nodeTwo);
    if (!graph.vertices[nodeOneVal]){
      graph.addVertex(nodeOne);
    }

    if (!graph.vertices[nodeTwoVal]){
      graph.addVertex(nodeTwo);
    }
  }

  return graph;
}

function graphToArray(entryNode){
  let checked = new Set();
  checked.add(entryNode.value);
  let result = [entryNode.value];
  function dfs(node){
    if (node.edges.length < 1){
      return;
    } else {
      for (let i = 0; i < node.edges.length; i++){
        let currentEdge = node.edges[i];
        if (!checked.has(currentEdge.value)){
          checked.add(currentEdge.value);
          result.push(currentEdge.value);
          dfs(currentEdge)
        }
      }
    }
  }

  dfs(entryNode);
  return [checked, result];
}


function findConnected(graph){
  let result = [];
  let checked = new Set();
  let queue = graph.vertArr;
  for (let i = 0; i < queue.length; i++){
    let currentNode = graph.vertices[queue[i]];
    if (!checked.has(currentNode.value)){
      checked.add(currentNode.value);
      let grouping = graphToArray(currentNode);
      checked = checked.union(grouping[0]);
      result.push(grouping[1]);
    }
  }

  return result;

}


function swapLexOrder(str,pairs){
  let stringArr = str.split("");
  let pairsGraph = buildGraph(pairs);
  let connected = findConnected(pairsGraph);
  for (let i = 0; i < connected.length; i++){
    let indicies = connected[i];
    let letters = [];
    for (let j = 0; j < indicies.length; j++){
      let letter = stringArr[indicies[j] - 1];
      letters.push(letter);
    }
    let sortedLetters = letters.sort().reverse();
    let sortedIndicies = indicies.sort();

    for (let k = 0; k < sortedLetters.length; k++){
      let index = sortedIndicies[k] - 1;
      stringArr[index] = sortedLetters[k];
    }
  }
  return stringArr.join("");
}
