function median(arr1, arr2){
  let firstArr, lastArr;
  if (arr2[arr2.length - 1] > arr1[arr1.length - 1]){
    firstArr = arr1;
    lastArr = arr2;
  } else {
    firstArr = arr2;
    lastArr = arr1;
  }

  let i = Math.floor(firstArr.length / 2);
  let j = Math.floor(lastArr.length / 2);
  let leftLength = i + j;
  let rightLength = arr1.length - i + arr2.length - j;
}

let arr1 = [1,3];
let arr2 = [2,4,5];

median(arr1, arr2);

// Idea: find index i in first and j in second that divides into equal
// array.
// eg:
/* [1,3]  [2,4,5]
      ^      ^
[1][2] <=> [3][4,5]
Possible cases:
Everything in one array smaller than other
*/
