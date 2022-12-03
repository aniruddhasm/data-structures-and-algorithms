
/*
Given an array arr[] of size n, find the first repeating element. 
The element should occurs more than once and the index of its first occurrence should be the smallest.


Example 1:

Input:
n = 7
arr[] = {1, 5, 3, 4, 3, 5, 6}
Output: 2
Explanation: 
5 is appearing twice and 
its first appearence is at index 2 
which is less than 3 whose first 
occuring index is 3.


Example 2:

Input:
n = 4
arr[] = {1, 2, 3, 4}
Output: -1
Explanation: 
All elements appear only once so 
answer is -1.

*/
//Solution 1:

function firstRepeated(arr, n) {
    let obj = {};
    let temp =[]
    for(let i=0; i<n; i++){
      if(obj[arr[i]]){
        temp.push(arr[i]);
      } else {
        obj[arr[i]] = i + 1
      }
    }
    if(temp.length > 0){
        let minIdx = obj[temp[0]]
        for(let i=1; i<temp.length; i++){
            minIdx = Math.min(minIdx, obj[temp[i]])
        }
        return minIdx
    }
    return -1
}


//Solution 2:
 function firstRepeated(arr, n) {
  let obj = {};
  let temp =[]
  for(let i=0; i<n; i++){
    if(obj[arr[i]]){
      temp.push(obj[arr[i]])
    } else {
      obj[arr[i]] = i + 1
    }
  }
  
  return temp.length ? Math.min(...temp) : -1
}


