function isCryptSolution(crypt, solution) {
    var hashMap = {};
    for (let i = 0; i < solution.length; i++){
        hashMap[solution[i][0]] = solution[i][1];
    }

    var firstWord = crypt[0];
    var secondWord = crypt[1];
    var thirdWord = crypt[2];

    var firstCrypt = '';
    for (let i = 0; i < firstWord.length; i++){
        firstCrypt += hashMap[firstWord[i]];
    }

    var secondCrypt = '';
    for (let i = 0; i < secondWord.length; i++){
        secondCrypt += hashMap[secondWord[i]];
    }

    var thirdCrypt = '';
    for (let i = 0; i < thirdWord.length; i++){
        thirdCrypt += hashMap[thirdWord[i]];
    }

    if (parseInt(firstCrypt).toString() !== firstCrypt
        || parseInt(secondCrypt).toString() !== secondCrypt
        || parseInt(thirdCrypt).toString() !== thirdCrypt){
        return false;
    }

    if (parseInt(firstCrypt) + parseInt(secondCrypt) === parseInt(thirdCrypt)){
        return true;
    } else {
        return false;
    }
}

var crypt = ["A", "A", "A"];
var solution = [['A', '0']];

console.log(isCryptSolution(crypt, solution));
