function gap(g, m, n){
  let result = [];

  for (var i = m; i + g < n; i++) {
    if (prime(i) && prime(i + g) && between(i, i + g)) {
      return [i, i + g];
    }
  }
  return null;
}

function between(start, end){
  for (var i = start + 1; i < end; i++) {
    if (prime(i)) {
      return false;
    }
  }
  return true;
}

function prime(num){
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }


  let maxEnd = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= maxEnd; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let test = between(3, 7);
console.log(test);

// let test = gap(2, 100, 110);
// let test1 = gap(4, 100, 110);
// let test2 = gap(6, 100, 110);
// let test3 = gap(8, 300, 400);
// let test4 = gap(10, 300, 400);
// console.log(test);
// console.log(test1);
// console.log(test2);
// console.log(test3);
// console.log(test4);
