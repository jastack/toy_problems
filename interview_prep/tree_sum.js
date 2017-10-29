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
    if (arr[start].value !== arr[end].value){
      return false;
    } else {
      i += 1;
      start += 1;
      end -= 1;
    }
  }

  return true;
}

console.log(checkSymmetric([1,2,2,1]));

function isTreeSymmetric(t) {
    let queue = [t];
    let i = 0;
    let start = 1;
    let end = 2;
    while (queue[i]){
        if (i === end){
            //do check from start to end
            if (checkSymmetric(queue.slice(start, end + 1))){
              start = 2 * start + 1;
              end = 2 * end + 2;
            } else {
              return false;
            }
        }

        let current = queue[i];
        if (current.left){
            queue.push(current.left);
            if (current.right){
                queue.push(current.right);
            } else {
            return false;
          }
        }

        i += 1;

    }

    return true;

}

console.log(isTreeSymmetric(nodeOne));
// console.log(pathSum(nodeOne, 7));
