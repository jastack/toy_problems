function findPairsWithGivenDifference(arr, k){
  var sortedArr = arr.sort(sortNumber);
  var result = [];
  var first = 0;
  var last = 0;
  while (first < arr.length && last < arr.length){
    if (sortedArr[last] - sortedArr[first] === k){
      result.push([sortedArr[last], sortedArr[first]]);
      last += 1;
      first += 1;
    } else if (sortedArr[last] - sortedArr[first] < k){
      last += 1;
    } else {
      first += 1;
    }
  }

  return result;
}

function sortNumber(a,b){
  return a - b;
}

var arr = [0, -1, -2, 2, 1];
// sorted = [-2, -1, 0, 1, 2]
//                ^F ^L
var k = 1;


console.log(findPairsWithGivenDifference(arr,k));
