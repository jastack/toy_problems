function findMissingLetter(array){
  let initial = array[0].charCodeAt(0);
  for (var i = 0; i < array.length; i++) {
    let letterCheck = array[i].charCodeAt(0);
    if (letterCheck != initial) {
      return String.fromCharCode(letterCheck - 1);
    } else {
      initial += 1;
    }
  }
  return 'no missing letters';
}

let arr = ['O','Q','R','S'];
console.log(findMissingLetter(arr));
