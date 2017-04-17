function gap(g, m, n){
  let result = [];

  for (var i = m; i + g < n; i++) {
    if (prime(i) && prime(i + g)) {
      for (var j = i + 1; j < g; j++) {
        if (prime(j)) {
          next;
        }
      }
      return [i, i + g];
    }
  }
  return null;
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

let test = gap(2, 100, 110);
let test1 = gap(4, 100, 110);
let test2 = gap(6, 100, 110);
let test3 = gap(8, 300, 400);
let test4 = gap(10, 300, 400);
console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
