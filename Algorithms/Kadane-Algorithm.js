Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 

More details: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/



Solution:
function kadaneAlgo(a) {
  let maxSum = a[0];
  let currentSum = 0;

  for (let i = 0; i < a.length; i++) {
    currentSum = currentSum + a[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}
console.log(kadaneAlgo([-4,-2, -3, -1]));
