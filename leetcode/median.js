var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length < nums2.length){
    let cached = nums1;
    nums1 = nums2;
    nums2 = cached;
  }

  var even = null;
  if ((nums1.length + nums2.length) % 2 === 0){
    even = 1;
  }

  if (nums1.length < 1 || nums2.length < 1){
    var singleNums = nums1.length < 1 ? nums2 : nums1;
    if (singleNums.length % 2 === 0){
      //even
      var m = singleNums.length / 2 - 1;
      return ((singleNums[m] + singleNums[m + 1]) / 2);
    } else {
      // odd
      m = Math.floor(singleNums.length / 2);
      return singleNums[m];
    }
  }

  const A = nums1;
  const B = nums2;

  console.log("A: " + A);
  console.log("B: " + B);
  console.log("--------");

  var m = nums1.length;
  var n = nums2.length;

  var iMin = 0;
  var iMax = m;
  var count = 0;

  while (iMin <= iMax){
    var i = Math.floor((iMin + iMax) / 2);
    var j = Math.floor((m + n) / 2) - i;



    let lowerB = B[j - 1] ? B[j - 1] : A[i - 1];
    let upperB = B[j] ? B[j] : A[i + 1];

    let upperA = A[i] ? A[i] : A[i - 1];
    let lowerA = A[i - 1] ? A[i - 1] : B[j - 1];

    console.log("Count: " + count);
    console.log("iMin: " + iMin);
    console.log("iMax: " + iMax);
    console.log("i: " + i);
    console.log("j: " + j);
    console.log("lowerB: " + lowerB);
    console.log("upperB: " + upperB);
    console.log("upperA: " + upperA);
    console.log("lowerA: " + lowerA);


    if (upperA >= lowerB && upperB >= lowerA ){
      console.log("upperA: " + upperA);
      console.log("lowerB: " + lowerB);
      if (even){
        return (lowerB + upperB) / 2;
      } else {
        if (A[i] && B[j]){
          return Math.min(A[i], B[j]);
        } else {
          return A[i] ? A[i] : B[j];
        }

      }


    } else if (upperA >= lowerB && upperB < lowerA){
      iMax = i;
    } else if (upperA < lowerB && upperB >= lowerA)
      iMin = i + 1;

    count += 1;
    console.log("--------------");
  }


};

const arr1 = [1,3,5,9];
const arr2 = [2,4];

/*
m = 2
n = 2
iMin = 0
iMax = 2
i = 1;
j = 1;
lowerB = 3
upperB = 4
upperA = 2
lowerA = 1

*/


console.log(findMedianSortedArrays(arr1, arr2));
