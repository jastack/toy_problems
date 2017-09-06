function swapLexOrder(str, pairs){
  var result = str.split('');
  var swappablePairs = pairsArr(pairs);
  var indexHash = {};
  var finalArray = new Array(str.length);
  for (let i = 0; i < swappablePairs.length; i++){
    var tempHash = {};
    for (let j = 0; j < swappablePairs[i].length; j++){
      var swappableIndex = swappablePairs[i][j] - 1;
      tempHash[swappableIndex] = str[swappableIndex];
    }

    var indicies = Object.keys(tempHash);
    var vals = Object.keys(tempHash).map(function(key){
      return tempHash[key];
    });

    var sorted = vals.sort().reverse();

    for (let n = 0; n < indicies.length; n++){
      var index = indicies[n];
      result[index] = sorted[n];
    }

  }

  return result.join('');
}

function reverseSort(a,b){
  return b - a;
}

function pairsArr(pairs){
  var result = [];
  for (let i = 0; i < pairs.length; i++){
    var currentPair = pairs[i];
    if (result.length < 1){
      var forward = findOverLap(currentPair, pairs.slice(i + 1));
      result.push(forward);
    } else {
      if (findOverLapBack(currentPair, result)){

      } else {
        var forward = findOverLap(currentPair, pairs.slice(i + 1));
        result.push(forward);
      }
    }
  }

  for (let k = 0; k < result.length; k++){
    var resultSet = new Set(result[k]);
    result[k] = Array.from(resultSet);
  }

  return result;
}

function findOverLap(pair, array){
  var result = pair;
  for (let i = 0; i < array.length; i++){
    var first = array[i][0];
    var second = array[i][1];
    if (pair.includes(first)){
      result.push(second);
    } else if (pair.includes(second)){
      result.push(first);
    }
  }

  return result;
}

function findOverLapBack(pair, array){
  var signal = 0;
  for (let i = 0; i < array.length; i++){
    var first = pair[0];
    var second = pair[1];
    if (array[i].includes(first)){
      array[i].push(second);
      signal = 1;
    } else if (array[i].includes(second)){
      array[i].push(first);
      signal = 1;
    }
  }

  return signal;
}

function numSortOne(a, b){
  if (a[0] === b[0]){
    return 0;
  } else {
    return (a[0] < b[0]) ? -1 : 1;
  }
}

function numSortTwo(a, b){
  if (a[0] === b[0]){
    return 0;
  } else {
    return (a[0] < b[0]) ? 1 : -1;
  }
}

function swap(str, first, last){
  var strSplit = str.split('');
  var strDup = strSplit.slice(0);
  var firstEl = strDup[first];
  var lastEl = strDup[last];

  strSplit[first] = lastEl;
  strSplit[last] = firstEl;

  return strSplit.join('');

}


var str = 'fixmfbhyutghwbyezkveyameoamqo';
var pairs = [[10,25],
 [1,20],
 [11,24],
 [6,8],
 [13,28],
 [1,6],
 [1,3],
 [21,22],
 [15,26],
 [13,26],
 [12,20],
 [27,29],
 [3,4],
 [4,7],
 [10,18],
 [10,27],
 [20,26],
 [20,30],
 [1,24]];

var str1 = 'upsrxqqnxvmjhjhnkpugymkfmdkddbwlrkpqstxx';
var str2 = 'upsrxqqnxvmuqjnnkpumymkdmgkfdbwlrkpqstxx';

function diff(string1, string2){
  var result = [];
  for (let i = 0; i < string1.length; i++){
    if (string1[i] !== string2[i]){
      result.push(i + 1);
    }
  }

  return result;
}


console.log(pairsArr(pairs));
// console.log(findOverLap([1,3],pairs.slice(1)));
//
//
// // console.log(swap(str, 0, 7));
// var result = swapLexOrder(str, pairs);
// console.log(result);

var result = diff(str1, str2);
console.log(result);
// console.log(result);

// console.log(result === 'lyyvurrhgxyzvonohunlfejihesiebjwbyatfkrv');
