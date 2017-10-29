class Node {
  constructor(val){
    this.value = val;
    this.left_node = null;
    this.right_node = null;
  }
}


class Tree {
  constructor(root){
    this.root = root;
  }

  superbalanced(){
    let stack = [];
    let depthSet = new Set();
    let depthArr = [];
    stack.push([this.root, 0]);
    while (stack.length > 0){
      let next = stack.pop();
      let current = next[0];
      let depth = next[1];
      if (!current.left_node && !current.right_node){
        if (!depthSet.has(current[1])){
          depthSet.add(depth);
          depthArr.push(depth);

          if (depthArr.length > 2 || (depthArr.length === 2 && Math.abs(depthArr[0] - depthArr[1]) > 1) ){
            return false;
          }
        }


      } else {
        if (current.left_node){
          stack.push([current.left_node, depth + 1 ]);
        }

        if (current.right_node){
          stack.push([current.right_node, depth + 1]);
        }
      }

    }


    return true;
  }
}


// Build the tree:
/*
         1
      2    4
    2    9
      5
    4
*/
const root = new Node(1);
const nodeOne = new Node(2);
const nodeTwo = new Node(3);
const nodeThree = new Node(4);
const nodeFour = new Node(2);
const nodeFive = new Node(5);
const nodeSix = new Node(4);
const nodeSeven = new Node(9);
root.left_node = nodeOne;
root.right_node = nodeThree;
nodeOne.left_node = nodeFour;
nodeFour.right_node = nodeFive;
nodeFive.left_node = nodeSix;
nodeThree.left_node = nodeSeven;
const tree = new Tree(root);
//

console.log(tree.superbalanced());
