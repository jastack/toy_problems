function solution(digits){
  let currentBest = parseInt(digits.slice(0, 5));
  for (let i = 0; i < digits.length - 5 + 1; i++) {
    let currentRange = parseInt(digits.slice(i, i + 5));
    if (currentRange > currentBest) {
      currentBest = currentRange;
    }
  }
  return currentBest;
}

let testNum = '312245';
let readout = solution(testNum, 5);
console.log(readout);
