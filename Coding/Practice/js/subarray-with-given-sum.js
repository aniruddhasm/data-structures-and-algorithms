Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

In case of multiple subarrays, return the subarray which comes first on moving from left to right.

Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements from 2nd position to 4th position is 12.





Solution: - 

const a = [1,2,3,4,5,6,7,8,9,10];
const n = 10;
const s = 15


function subarraySum(a, n, s){

  for(let i = 0; i < n; i++){
  let sum = 0;
  	for(let j = i; j < n; j++){
    	sum += a[j];
      if(sum > s){
      	break;
      } else if(sum === s){
      	return [i+1, j+1];
      }
      }
    }
   return [-1]
}

console.log(subarraySum(a, n, s))
