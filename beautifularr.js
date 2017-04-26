
var countArrangement = function(N) {
    var c = 0;
    var s = [];
    function helper(index) {
        if (index === N + 1){
           c += 1;
           return c;
        }
        for (var i = 0; i < N; i++) {
            if (!s[i] && (index % (i + 1) === 0 || (i + 1) % index === 0)) {
                s[i] = true;
                helper(index + 1);
                s[i] = false;
            }
        }
    }

    helper(1);
    return c;
};



let test = countArrangement(3);
console.log(test);

// Example: Input 2 give two:
// [1,2], [2,1]
// Because satisfies two conditions:
// The number at the ith position is divisible by i
// i is divisible by the number at the ith position
// In the first array 1 is the 1st position, so 1 / 1 = true
// And 1 / 1 (flipped from before) is also true (only one needs to be true)
