// This is practice writing in JavaScript, for a full description
// of my thought process, see products.rb

function getProducts(arr){
  var productArray = new Array(arr.length);
  var product = 1;

  for (var i = 0; i < arr.length; i++){
    productArray[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (var i = arr.length - 1; i >= 0; i--){
    productArray[i] *= product;
    product *= arr[i];
  }

  return productArray;
}

// I'm going to write a quick function that compares arrays, so my
// test will spit out true or false. Just to simplify things, this
// will only consider non-nested arrays.

Array.prototype.equals = function (arr) {
  if (!arr){
    return false;
  }

  if (this.length != arr.length){
    return false;
  }

  for (var i = 0; i < arr.length; i++){
    if (this[i] != arr[i]) {
      return false;
    }
  }

  return true;

};

const arr1 = [1, 7, 3, 4];
const arr2 = [1, 7, 3, 4, 5, 9];
const arr3 = [0, 4, 5, 10];

console.log(getProducts(arr1).equals([84, 12, 28, 21]));
console.log(getProducts(arr2).equals([3780, 540, 1260, 945, 756, 420]));
console.log(getProducts(arr3).equals([200, 0, 0, 0]));
