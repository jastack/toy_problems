class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
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
      if (!current.left && !current.right){
        if (!depthSet.has(current[1])){
          depthSet.add(depth);
          depthArr.push(depth);

          if (depthArr.length > 2 || (depthArr.length === 2 && Math.abs(depthArr[0] - depthArr[1]) > 1) ){
            return false;
          }
        }


      } else {
        if (current.left){
          stack.push([current.left, depth + 1 ]);
        }

        if (current.right){
          stack.push([current.right, depth + 1]);
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
root.left = nodeOne;
root.right = nodeThree;
nodeOne.left = nodeFour;
nodeFour.right = nodeFive;
nodeFive.left = nodeSix;
nodeThree.left = nodeSeven;
const tree = new Tree(root);
//

console.log(tree.superbalanced());


const newTree = {
    "value": -191,
    "left": {
        "value": 374,
        "left": {
            "value": -361,
            "left": {
                "value": -771,
                "left": null,
                "right": {
                    "value": -379,
                    "left": {
                        "value": -154,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -699,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": 159,
                "left": {
                    "value": -900,
                    "left": {
                        "value": 305,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -486,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": 200,
                    "left": {
                        "value": -699,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 470,
                        "left": null,
                        "right": null
                    }
                }
            }
        },
        "right": null
    },
    "right": {
        "value": 374,
        "left": null,
        "right": {
            "value": -361,
            "left": {
                "value": 159,
                "left": {
                    "value": 200,
                    "left": {
                        "value": 470,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -699,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -900,
                    "left": {
                        "value": -486,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": 305,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": -771,
                "left": {
                    "value": -379,
                    "left": {
                        "value": -699,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -154,
                        "left": null,
                        "right": null
                    }
                },
                "right": null
            }
        }
    }
};

/*             -191
          374      374
      -361  -361 -771 159

*/

function treeReader(node){
  let result = [];
  let queue = [node];

  while (queue.length > 0){
    let current = queue.shift();
    result.push(current.value);
    if (current.left){
      queue.push(current.left);
    }

    if (current.right){
      queue.push(current.right);
    }
  }

  return result;
}

console.log(treeReader(tree.root));
