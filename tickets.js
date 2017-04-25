function tickets(peopleInLine){
  let changeHash = {};

  for (var i = 0; i < peopleInLine.length; i++) {
    let currentPerson = peopleInLine[i];
    if (currentPerson === 25) {
      if (changeHash[25]) {
        changeHash[25] += 1;
      } else {
        changeHash[25] = 1;
      }
    } else if (currentPerson === 50) {
      if (changeHash[25] > 0) {
        changeHash[25] -= 1;
        if (changeHash[50]) {
          changeHash[50] += 1;
        } else {
          changeHash[50] = 1;
        }
      } else {
        return "NO";
      }
    } else if (currentPerson === 100) {
        if (changeHash[50] > 0 && changeHash[25] > 0) {
          changeHash[50] -= 1;
          changeHash[25] -= 1;
      } else if (changeHash[25] > 2) {
          changeHash[25] -= 3;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}

let people = [25, 100];
let result = tickets(people);
console.log(result);
