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

function kPowerFree(num, k, primes){
  for (let i = 0; i < primes.length; i++){
    if (num % primes[i] === 0){
      return false;
    }
  }
  return true;

}

function processData(input){
  let counter = 0;
  let max = input[0];
  let k = input[1];
  let boundSet = Math.log(max) / k;
  let bound = Math.floor(Math.exp(boundSet));
  let primes = primeArr(bound).map(el => Math.pow(el, k));
  for (let i = 1; i <= max; i++){
    if (kPowerFree(i, k, primes)){
      counter += 1;
    }
  }
  return counter;
}

console.log(processData([10,2]));
