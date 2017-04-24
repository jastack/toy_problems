function scramble(str1, str2){
  let store = {};
  for (var i = 0; i < str1.length; i++) {
    let el = str1[i];
    if (store[el]){
      store[el] += 1;
    } else {
      store[el] = 1;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    let el = str2[j];
    if (store[el] && store[el] > 0) {
      store[el] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

let result = scramble('rkqodlw','world');
console.log(result);
