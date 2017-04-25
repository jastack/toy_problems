class driverTasks {
  constructor(numDrivers, numTasks){
    this.numDrivers = numDrivers;
    this.numTasks = numTasks;
    this.tasks = [];
    this.interval = Math.floor(1000000 / this.numDrivers);
    this.drivers = this.generateTasks();
  }

  generateTasks(){
    let drivers = {};
    for (var i = 0; i < this.numDrivers; i++) {
      let tasks = [];
      let lower = i * this.interval;
      let upper = (i + 1) * this.interval;
      while (tasks.length < this.numTasks){
        let task = [this.getRandomInt(lower, upper), this.getRandomInt(0, 1000000)];
        if (!tasks.includes(task)){
          tasks.push(task);
        }
      }
      let sortedTasks = tasks.sort((a,b) => a[1] - b[1]);
      drivers[i] = sortedTasks;
    }
    return drivers;
  }

  getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)) + min;
  }

  distance(pointOne, pointTwo){
    let [x1, y1] = pointOne;
    let [x2, y2] = pointTwo;

    let xDiff = Math.pow(x2 - x1, 2);
    let yDiff = Math.pow(y2 - y1, 2);
    let dist = Math.sqrt(xDiff + yDiff);
    return dist;
  }

  totalDistance(pointsArr){
    let total = 0;
    for (var i = 0; i < pointsArr.length - 1; i++) {
      total += this.distance(pointsArr[i], pointsArr[i + 1]);
    }
    return total;
  }

  removeAndAdd(pointOne, pointTwo, pointThree){
    let initial = this.distance(pointOne, pointTwo);
    let change = this.distance(pointOne, pointThree) + this.distance(pointThree, pointTwo);
    return change - initial;
  }

  insert(newTaskLocation){
    let driver = Math.floor(newTaskLocation[0] / this.interval);
    let tasks = this.drivers[driver];

    let initialTotal = this.totalDistance(tasks);
    let currentTotal = initialTotal + this.distance(newTaskLocation, tasks[0]);
    let position = 0;

    for (var i = 1; i < tasks.length; i++) {
      let extraRoute = this.removeAndAdd(tasks[i - 1], tasks[i], newTaskLocation);
      if (initialTotal + extraRoute < currentTotal){
        currentTotal = initialTotal + extraRoute;
        position = i;
      }
    }

    let finalCheck = initialTotal + this.distance(tasks[tasks.length - 1], newTaskLocation);

    if (finalCheck < currentTotal){
      currentTotal = finalCheck;
      position = tasks.length;
    }

    return [`Driver: ${driver}`,`Position: ${position}`, `New Total: ${currentTotal}`];
  }
}

let fedEx = new driverTasks(1000, 25);
let ups = new driverTasks(10000, 25);
let onFleet = new driverTasks(100000, 25);
let newPosition = [1125,5679];

var t0 = performance.now();
fedEx.insert(newPosition);
var t1 = performance.now();
console.log("1000 took " + (t1 - t0) + " milliseconds.");

var t2 = performance.now();
ups.insert(newPosition);
var t3 = performance.now();
console.log("10000 took " + (t3 - t2) + " milliseconds.");

var t4 = performance.now();
onFleet.insert(newPosition);
var t5 = performance.now();
console.log("100000 took " + (t5 - t4) + " milliseconds.");
