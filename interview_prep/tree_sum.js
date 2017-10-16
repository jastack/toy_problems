function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

// let nodeOne = new Node(4);
// let nodeTwo = new Node(1);
// let nodeThree = new Node(3);
// let nodeFour = new Node(-2);
// let nodeFive = new Node(1);
// let nodeSix = new Node(2);
// let nodeSeven = new Node(3);
// let nodeEight = new Node(-2);
// let nodeNine = new Node(-3);
//
// nodeOne.left = nodeTwo;
// nodeOne.right = nodeThree;
// nodeTwo.left = nodeFour;
// nodeThree.left = nodeFive;
// nodeThree.right = nodeSix;
// nodeFour.right = nodeSeven;
// nodeSix.left = nodeEight;
// nodeSix.right = nodeNine;

let nodeOne = new Node(1);
let nodeTwo = new Node(2);
let nodeThree = new Node(2);
let nodeFour = new Node(3);
let nodeFive = new Node(4);
let nodeSix = new Node(4);
let nodeSeven = new Node(3);

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
// nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;
nodeThree.left = nodeSix;
nodeThree.right = nodeSeven;

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

function checkSymmetric(arr){
  let start = 0;
  let end = arr.length - 1;
  let i = 0;
  while (start < end){
    if (arr[start] !== arr[end]){
      return false;
    } else {
      i += 1;
      start += 1;
      end -= 1;
    }
  }

  return true;
}

console.log(checkSymmetric([1,null,2,1]));

function isTreeSymmetric(tree){
  let queue = [tree];
  // console.log(queue);
  let i = 0;
  let level = 0;
  let levelPointer = 0;
  while (queue[i]){
    let currentNode = queue[i];
    queue.push(currentNode.left);
    queue.push(currentNode.right);
    if (i === Math.pow(2, level)){
      // console.log(queue.slice(levelPointer));
      level += 1;
      levelPointer += Math.pow(2, level);

    }

    i++;
  }

  function readTree(arr){
    return arr.map(el => {
      if (el){
        return el.val;
      }
    });
  }

  return readTree(queue);
}

console.log(isTreeSymmetric(nodeOne));
// console.log(pathSum(nodeOne, 7));
