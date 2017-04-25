function insert(driverTasks, newTaskLocation){
  let initialTotal = totalDistance(driverTasks);
  let currentTotal = initialTotal + distance(newTaskLocation, driverTasks[0]);
  let position = 0;

  for (var i = 1; i < driverTasks.length; i++) {
    let extraRoute = removeAndAdd(driverTasks[i - 1], driverTasks[i], newTaskLocation);
    if (initialTotal + extraRoute < currentTotal) {
      currentTotal = initialTotal + extraRoute;
      position = i;
    }
  }

  let finalCheck = initialTotal + distance(driverTasks[driverTasks.length - 1], newTaskLocation);

  if (finalCheck < currentTotal) {
    currentTotal = finalCheck;
    position = driverTasks.length;
  }

  return [position, currentTotal];

}

function removeAndAdd(pointOne, pointTwo, pointThree){
  let initial = distance(pointOne, pointTwo);
  let change = distance(pointOne, pointThree) + distance(pointThree, pointTwo);
  return change - initial;
}



function generateTasks(num){
  let arr = [];
  while (arr.length < num){
    let task = [getRandomInt(0, 100), getRandomInt(0, 100)];
    if (!arr.includes(task)){
      arr.push(task);
    }
  }
  return arr;
}


function totalDistance(points){
  let total = 0;
  for (var i = 0; i < points.length - 1; i++) {
    total += distance(points[i], points[i + 1]);
  }
  return total;
}

function distance(pointOne, pointTwo){
  let [x1, y1] = pointOne;
  let [x2, y2] = pointTwo;

  let xDiff = Math.pow(x2 - x1, 2);
  let yDiff = Math.pow(y2 - y1, 2);
  let dist = Math.sqrt(xDiff + yDiff);
  return dist;
}

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min)) + min;
}

let driverTasks = generateTasks(25);
let result = insert(driverTasks, [3, 4]);
console.log(result);

// var t0 = performance.now();
// insert(1, 5);
// var t1 = performance.now();
// console.log("Insert took " + (t1 - t0) + " milliseconds.");
