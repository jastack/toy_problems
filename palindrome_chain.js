var palindromeChainLength = function(n){
  let count = 0;
  let reverseN = String(n).split("").reverse().join("");
  let reverse = parseInt(reverseN);
  while (n != reverse){
    n = n + reverse;
    reverseN = String(n).split("").reverse().join("");
    reverse = parseInt(reverseN);
    count += 1;
  }



  return count;
};

palindromeChainLength(87);
