// The problem: Given a sorted array of distinct integers,
// find the index i for which array[i] == i.
// Brute force problem easy - just loop through array until element
// matches index. Lets do better - basically do binary search.
//
// Case 1:
// arr = [-8,0,2,5]
// return -> 2
//
//
// Case 2:
// arr = [-1,0,3,6]
//             ^
// return => -1 because no index matches
//  start = 2
//  end = 2
//  check = 2
//   3 > 2
//
// Case 3:
// arr = [-1, 0, 1, 2, 3, 4, 5, 7, 9]
// start = 7
// end = 8
// check = 7
// arr[check] < check

// Pseudocode:
// function(arr)
//  set start variable as 0
//  set end variable as array.length - 1
//  start loop - while start <= end
//   set check at (start + end) / 2 and round down
//   if array[check] == check
//     return check
//   else if array[check] < check
//     start = check + 1
//   else if array[check] > check
//     end = check
//   If doesn't find, return -1
//
function indexEqualsValueSearch(arr){
  var start = 0;
  var end = arr.length - 1;
  while (start < end){
    var check = Math.floor((start + end) / 2);
    if (arr[check] === check) {
      return check;
    } else if (arr[check] < check) {
      start = check + 1;
    } else if (arr[check] > check) {
      end = check;
    }
  }

  return -1;
}

const arr1 = [-8,0,2,5];
const arr2 = [-1,0,3,6];
const arr3 = [-1, 0, 1, 2, 3, 4, 5, 7, 9];
console.log(indexEqualsValueSearch(arr1) === 2);
console.log(indexEqualsValueSearch(arr2) === -1);
console.log(indexEqualsValueSearch(arr3) === 7);
