function perimeter(n) {
  let sum = 4;
  let arr = [1, 1, 2];

  if (n === 1){
    return 8;
  } else if (n === 2) {
    return 16;
  }

  for (var i = 3; i < n + 1; i++) {
    let update = arr[i - 1] + arr[i - 2];
    arr.push(update);
    sum += update;
  }

  return 4 * sum;

}

let result = perimeter(30);
console.log(result);
