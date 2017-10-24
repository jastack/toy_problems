function isPrime(num){
    if (num <= 1){
        return false;
    } else if (num === 2){
        return true;
    }

    let bound = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= bound; i++){
        if (num % i === 0){
            return false;
        }
    }

    return true;

}

function primeArr(num){
  let result = [];
  for (let i = 0; i <= num; i++){
    if (isPrime(i)){
      result.push(i);
    }
  }

  return result;
}

function kPowerFree(num, k){
  let boundSet = Math.log(num) / k;
  let bound = Math.floor(Math.exp(boundSet));
  let primes = primeArr(bound).map(el => Math.pow(el, k));
  for (let i = 0; i < primes.length; i++){
    if (num % primes[i] === 0){
      return false;
    }
  }
  return true;

}

function processData(input){
  let counter = 0;
  for (let i = 1; i <= input[0]; i++){
    if (kPowerFree(i, input[1])){
      counter += 1;
    }
  }
  return counter;
}

console.log(processData([10,3]));
