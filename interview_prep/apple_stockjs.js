// See apple_stocks.rb for explanation
// this is practice coding in JavaScript


function maxDifference(arr){
  var max = null, min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var profit = arr[i] - min;

    if (max === null || profit > max) {
      max = profit;
    }

    if (arr[i] < min) {
      min = arr[i];
    }

  }

  return max;
}

const arr1 = [1, 3, 4, 2, 7, 10];
const arr2 = [10, 8, 5, 3, 2, 0];
const arr3 = [10, 9, 5, 7, 11];
const arr4 = [5, 5, 5, 5, 5];

console.log(maxDifference(arr1) === 9);
console.log(maxDifference(arr2) === -1);
console.log(maxDifference(arr3) === 6);
console.log(maxDifference(arr4) === 0);
