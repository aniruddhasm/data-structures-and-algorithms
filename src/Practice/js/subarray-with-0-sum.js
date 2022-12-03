/*
Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.

Input:
5
4 2 -3 1 6

Output: 
Yes
*/

//Solution 1:
function subArrayExists(arr, n){
  for(let i = 0; i < n; i++){
    if(arr[i] === 0) return true
    let sum = 0;
    for(let j = i; j < n; j++){
      sum += arr[j];
      if(sum === 0){
        return true
      }
    }
   }
   return false
}

//Solution 2- hashmap
function subArrayExists(arr, n){
  const mySet1 = new Set();
  let sum = 0;
  for(let i = 0; i < n; i++){
    if(arr[i] === 0) return true
    sum += arr[i];
    if(mySet1.has(sum)){
      return true
    }
    mySet1.add(sum);
  }
  return false
}


console.log(subArrayExists([4,2,-3,1,6], 5))

