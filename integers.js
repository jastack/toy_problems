function listSquared(m, n) {
  let result = [];
  for (var i = m; i <= n; i++) {
    let facArr = factors(i);
    let sumFacArr = sumSquaresArray(facArr);
    if (isSquare(sumFacArr)) {
      let entry = [i, sumFacArr];
      result.push(entry);
    }
  }
  return result;
}


function factors(n){
  let result = [];

  for (var i = 0; i <= n / 2; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  result.push(n);
  return result;
}

function sumSquaresArray(arr){
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}

function isSquare(num){
  if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
    return true;
  } else {
    return false;
  }

}


let test = listSquared(250, 500);
console.log(test);
