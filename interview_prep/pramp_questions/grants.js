function findGrantsCap(grantsArray, newBudget) {
  // your code goes here
  var sorted = grantsArray.sort((a,b)=>a-b);
  var testNum = newBudget / grantsArray.length;

  for (var i = 0; i < grantsArray.length; i++){
    if (sorted[i] < testNum){
      newBudget -= sorted[i];
    } else {
      var remainder = grantsArray.length - i;
      var cap = newBudget / remainder;
      return cap;
    }
  }
}
console.log(findGrantsCap([2, 100, 50, 120, 1000],190))
//

// **O(nlog(n))
// Case 1:
// grantsArray = [2, 20, 15]
// sorted = [2, 15, 20, 25 , 26]
//               1^
// newBudget = 50
// => cap 14
//
//
//
// Approach 1:
// Sum the grants array => 37 / 3 = 12
// Figure out which numbers seemed big
//
// Apporach 2:
//  Sort the grantsArray
//  start iterating through sorted grants array
//  find newBudge / length of the grants array
//  if newBudget - current grant < current grant
//
