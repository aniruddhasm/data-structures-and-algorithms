/*
Given an array arr[] of size N.
 The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 

More details: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/


*/
function kadaneAlgo(arr) {
  let maxSum = arr[0];
  let currentSum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}
console.log(kadaneAlgo([1, 2, 3, -2, 5]));
