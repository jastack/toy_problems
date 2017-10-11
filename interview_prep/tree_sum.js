function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

let nodeOne = new Node(4);
let nodeTwo = new Node(1);
let nodeThree = new Node(3);
let nodeFour = new Node(-2);
let nodeFive = new Node(1);
let nodeSix = new Node(2);
let nodeSeven = new Node(3);
let nodeEight = new Node(-2);
let nodeNine = new Node(-3);

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
nodeTwo.left = nodeFour;
nodeThree.left = nodeFive;
nodeThree.right = nodeSix;
nodeFour.right = nodeSeven;
nodeSix.left = nodeEight;
nodeSix.right = nodeNine;

// console.log(nodeOne);

function pathSum(tree, sum){
  function search(node, currentSum){
    let current = currentSum + node.val;
    if (!node.left && !node.right){
      if (current === sum){
        return true;
      } else {
        return false;
      }
    } else if (!node.left){
      return search(node.right, current);
    } else if (!node.right){
      return search(node.left, current);
    } else {
      return search(node.left, current) || search(node.right, current);
    }
  }
  return search(tree, 0);
}

console.log(pathSum(nodeOne, 7));
