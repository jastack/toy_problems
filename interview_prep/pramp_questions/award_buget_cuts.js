function findGrantsCap(grantsArray, newBudget){
  var cap = (newBudget / grantsArray.length);
  var sorted = grantsArray;
  sorted.sort(sortNumber);
  var total = newBudget;
  for (var i = 0; i < grantsArray.length - 1; i++){
    if (sorted[i] < cap){
      total = total - sorted[i];
      cap = total / (sorted.length - i - 1);

    }
  }

  return cap;
}

function sortNumber(a,b){
  return a - b;
}

// example input: grantsArray = [2, 100, 50, 120, 1000]
//  newBudget: newBudget = 190
// output: 47

// Approach 1:
//  Find the value of the newBudget / length of array.
 // Set the cap equal to this.
// Then iterate through the grantsArray and
//  for every value below the mean, move the cap up by the difference.

// Pseudocode:
// function(grantsArray, newBudget)
//  Find newBudget / grantsArray.length
//  Iterate through grantsArray, if below the value add that amount to cap.
//  Walk through:
//   [2, 100, 50, 120, 1000]
//                       ^
//  total = 188
//  cap = 38




var grantsArray = [2, 50, 100, 120, 167];
//                              ^
 // newbudget = 248;
//  cap = 128
//  expected = 128

var newBudget = 400;

findGrantsCap(grantsArray, newBudget);
