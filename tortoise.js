function race(v1, v2, g){
  if (g > 0){
    if (v1 >= v2){
      return null;
    }
  }

  let totalSeconds = Math.floor(g * 60 * 60 / (v2 - v1));
  let seconds = totalSeconds % 60;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let hours = Math.floor(totalSeconds / (60 * 60));

  return [hours, minutes, seconds];
}

let result = race(100, 90, 0);
console.log(result);
