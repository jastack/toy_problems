
function countArrangement(N){
  if (N < 1){
    return null;
  }

  if (N === 1) {
    return 1;
  }

  let result = 1;
  for (var i = 1; i <= N; i++) {
    let indexTotal = 0;
    for (var j = 1; j <= N; j++) {
      if (j % i === 0){
        indexTotal += 1;
      }
    }
    result *= indexTotal;
  }

  return result;
}

let test = countArrangement(2);
console.log(test);

// Example: Input 2 give two:
// [1,2], [2,1]
// Because satisfies two conditions:
// The number at the ith position is divisible by i
// i is divisible by the number at the ith position
// In the first array 1 is the 1st position, so 1 / 1 = true
// And 1 / 1 (flipped from before) is also true (only one needs to be true)
