// JavaScript version of Binary Search Algorithm
// This is the iterative version:
function binary_search(arr, target){
  let start = 0;
  let stop = arr.length - 1;
  while (start <= stop){
    let middle = Math.floor((start + stop) / 2);
    if (arr[middle] === target){
      return middle;
    } else if (arr[middle] > target){
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

const arr1 = [0, 3, 5, 7, 9, 11];
const arr2 = [-5, 1, 2, 15, 19, 20];
const arr3 = [0, 2, 5, 11, 25, 31];

console.log(binary_search(arr1, 3));
console.log(binary_search(arr2, 19));
console.log(binary_search(arr3, 4));

// And now the recursive version:
function binary_search_rec(arr, target){
  if (arr.length < 1){
    return null;
  }

  let middle = Math.floor(arr.length / 2);

  if (arr[middle] > target){
    binary_search_rec(arr.slice(0, middle - 1), target);
  } else if (arr[middle] === target){
    return middle;
  } else {
    let subAnswer = binary_search_rec(arr.slice(middle + 1), target);
    return subAnswer === null ? null : (middle + 1) + subAnswer;
  }
}

console.log(binary_search_rec(arr1, 3));
console.log(binary_search_rec(arr2, 19));
console.log(binary_search_rec(arr3, 4));
