function findOutlier(integers){
  let parityHash = {even: [], odd: []};

  for (var i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      parityHash.even.push(integers[i]);
    } else {
      parityHash.odd.push(integers[i]);
    }
  }

  let result = parityHash.even.length === 1 ? parityHash.even[0] : parityHash.odd[0];

  return result;
}

let ans = findOutlier([1, 2, 3]);
console.log(ans);
