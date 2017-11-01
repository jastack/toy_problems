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
nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;
nodeThree.left = nodeSix;
nodeThree.right = nodeSeven;

// console.log(nodeOne);

/*
       1
      2 2
    3  4 4 3
*/

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
  while (start < end){
    if (arr[start] !== arr[end]){
      return false;
    } else {
      start += 1;
      end -= 1;
    }
  }

  return true;
}

console.log(checkSymmetric([]));

// function isTreeSymmetric(t) {
//     let queue = [t];
//     let vals = [t.val];
//     while (queue.length > 0){
//       let current = queue.shift();
//
//       if (current.left){
//         queue.push(current.left);
//         vals.push(current.left.val);
//       }
//
//       if (current.right){
//         queue.push(current.right);
//         vals.push(current.right.val);
//       }
//     }
//
//     for (let i = 0; Math.pow(2, i) < vals.length; i++){
//       let start = Math.pow(2, i) - 1;
//       let endIdx = start * 2;
//
//       let sliced = vals.slice(start, endIdx + 1);
//       if (!checkSymmetric(sliced)){
//         return false;
//       }
//
//     }
//     return true;
//
// }

function inOrderTraversal(root){
  let result = [];
  function search(node){
    if (node.left){
      search(node.left);
    }

    result.push(node.val);

    if (node.right){
      search(node.right);
    }
  }

  search(root);
  return checkSymmetric(result);
}

console.log(inOrderTraversal(nodeOne));

// console.log(isTreeSymmetric(nodeOne));
// console.log(pathSum(nodeOne, 7));
