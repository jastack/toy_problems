// See get_differ_number.rb for my thought process
function getDifferentNumber(arr){
  const set = new Set(arr);

  for (var i = 0; i < arr.length; i++){
    if (!set.has(i)){
      return i;
    }
  }

  if (arr.length === Math.pow(2, 31) - 1){
    return undefined;
  } else {
    return arr.length;
  }
}

const arr1 = [0, 1, 2, 3];
const arr2 = [0, 2, 3, 4];
const arr3 = [6, 3, 9, 0];

console.log(getDifferentNumber(arr1) === 4);
console.log(getDifferentNumber(arr2) === 1);
console.log(getDifferentNumber(arr3) === 1);
