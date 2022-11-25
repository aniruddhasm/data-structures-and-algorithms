Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

Example 1:

Input:
N = 8
A[] = {15,-2,2,-8,1,7,10,23}
Output: 5
Explanation: The largest subarray with
sum 0 will be -2 2 -8 1 7.

Your Task:
You just have to complete the function maxLen() which takes two arguments an array A and n, where n is the size of the array A and returns the length of the largest subarray with 0 sum.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).

Constraints:
1 <= N <= 105
-1000 <= A[i] <= 1000, for each valid i


solution:


let hM = new Map();
let sum = 0;
let max_len = 0;

for(let i = 0; i< n-1;i++){
  sum += arr[i]
  if (arr[i] == 0 && max_len == 0)
      max_len = 1;

  if (sum == 0)
      max_len = i + 1;

  if (hM.get(sum) != null)
      max_len = Math.max(max_len, Math.abs(i - hM.get(sum)));
  else
      hM.set(sum, i)
}

return max_len
