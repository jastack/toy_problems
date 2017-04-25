// I first built a 1,000,000 X 1,000,000 grid and divided it into equally sized columns based on how many drivers there are. Then I iterated through each driver (column) and added random points to that driver's task list until each driver had the same number of tasks (25). Each task location had to fulfill the following conditions: the x value must be within the range covered by the driver, and there could not be any duplicate points.


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

  // This functions finds the total distance of a driver's path. I actually don't think I need this function, if I were to refactor I would take it out.

  totalDistance(pointsArr){
    let total = 0;
    for (var i = 0; i < pointsArr.length - 1; i++) {
      total += this.distance(pointsArr[i], pointsArr[i + 1]);
    }
    return total;
  }

  // This is the function the determins the addition length added to a path if you were to add a point between two other points.

  removeAndAdd(pointOne, pointTwo, pointThree){
    let initial = this.distance(pointOne, pointTwo);
    let change = this.distance(pointOne, pointThree) + this.distance(pointThree, pointTwo);
    return change - initial;
  }

  // This is the function that takes care of Part 2 of the problem. It figures out which driver should take on the new task and iterates through each point on that path.

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

  // This is the naive solution for Part 1. It takes the new task and looks at every driver and every path to find the one which minimizes the extra length.

  insertCheckAll(newTaskLocation){
    let extra = null;
    let driver = 0;
    for (var i = 0; i < this.numDrivers; i++) {
      let check = this.insertBrute(this.drivers[i], newTaskLocation);
      if (extra === null || check[0] < extra){
        extra = check[0];
        driver = i;
      }
    }
    return [driver, extra];
  }

  // This is a helper method of insertCheckAll -- it checks one path. I could probably combine this with the optimized insert if I were to refactor.

  insertBrute(tasks, newTaskLocation){
    let initialTotal = this.totalDistance(tasks);
    let extra = this.distance(newTaskLocation, tasks[0]);
    let position = 0;

    for (var i = 1; i < tasks.length; i++) {
      let extraRoute = this.removeAndAdd(tasks[i - 1], tasks[i], newTaskLocation);
      if (extraRoute < extra){
        extra = extraRoute;
        position = i;
      }
    }

    let finalCheck = this.distance(tasks[tasks.length - 1], newTaskLocation);

    if (finalCheck < extra){
      extra = finalCheck;
      position = tasks.length;
    }

    return [extra, position];
  }
}

// The next few lines set up the data
let fedEx = new driverTasks(1000, 25);
let ups = new driverTasks(10000, 25);
// The next one is pretty slow. Could definitely be optimized
let onFleet = new driverTasks(100000, 25);
let newPosition = [125,5679];

// Let's test the naive solution here - the function will check
// every possible place to insert the newPosition and return
// the driver number and extra length add to the path where
// the newPosition should go. It's very slow.

// For 1000 drivers
console.time('1000 drivers naive');
fedEx.insertCheckAll(newPosition);
console.timeEnd('1000 drivers naive');

// For 10000 drivers
console.time('10000 drivers naive');
ups.insertCheckAll(newPosition);
console.timeEnd('10000 drivers naive');

// For 100000 drivers
console.time('100000 drivers naive');
onFleet.insertCheckAll(newPosition);
console.timeEnd('100000 drivers naive');

// Now to Part 2. This way is much faster because before iterating through each possible position, the function figures out which driver should take on the task. This is done by taking the x value of the newPosition and dividing it by the interval size (the interval is set by taking 1000000 - the size of the grid - and dividing by the number of drivers).

// Rounding down, this number is the driver number who should take this task. From there the function just iterates through the 25 original tasks to find the best spot.

// This way the task can be inserted in constant time. It will always have to iterate through the 25 tasks, but it doesn't matter how many drivers there are.

// I can imagine a further optimization based on the fact that the tasks are ordered -- a binary search could determine where the new point would fit in the path (again, this might not be absolutely optimized, but generally will be).

// For 1000 drivers
console.time('1000 drivers');
fedEx.insert(newPosition);
console.timeEnd('1000 drivers');

// For 10000 drivers
console.time('10000 drivers');
ups.insert(newPosition);
console.timeEnd('10000 drivers');

// For 100000 drivers
console.time('100000 drivers');
onFleet.insert(newPosition);
console.timeEnd('100000 drivers');
