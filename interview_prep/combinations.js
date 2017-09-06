function combinations(arr) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    };
    return fn('', arr, []);
}

function dups(arr){
  var set = new Set();
  for (let i = 0; i < arr.length; i++){
    set.add(arr[i]);
  }

  return arr.length - set.size;
}

var letters = [10, 50, 50, 100];

function combinationsArr(arr){
  var combi = new Set();
  var temp= 0;

  var letLen = Math.pow(2, arr.length);

  for (var i = 0; i < letLen ; i++){
    temp= 0;
    for (var j=0;j<arr.length;j++) {
      if ((i & Math.pow(2,j))){
        temp += letters[j]
      }
    }
    if (temp !== 0) {
      combi.add(temp);
    }
  }


  return combi.size;
}

console.log(combinationsArr(letters));

// function genStr(num){
//   var arr = new Array(num);
//   for (let i = 0; i < num; i++){
//     arr[i] = 'a';
//   }
//
//   return arr.join('');
// }
//
// const numLetters = 5
//
// const wordOne = 'a';
// const wordTwo = 'ab';
// const wordThree = 'abc';
// const wordFour = 'abbc';
// const wordFive = 'abcde';
// const wordSix = genStr(numLetters);
//
//
// var combs = combinations(wordOne);
// var combs1 = combinations(wordTwo);
// var combs2 = combinations(wordThree);
// var combs3 = combinations(wordFour);
// var combs4 = combinations(wordFive);
// var combs5 = combinations(wordSix);
//
// console.log("One letter: " + combs.length);
// console.log("Two letters: " + combs1.length);
// console.log("Three letters: " + combs2.length);
// console.log("Four letters: " + combs3.length);
// console.log("Five letters: " + combs4.length);
// console.log("Word with " + numLetters + " letters: " + combs5.length);
