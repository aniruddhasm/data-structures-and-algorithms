
/*
Given an array of N positive integers where all numbers occur even number of times 
except one number which occurs odd number of times. 
Find the exceptional number.

Input:
N = 7
Arr[] = {1, 2, 3, 2, 3, 1, 3}
Output: 3
Explaination: 3 occurs three times.

*/



const a = [468,335,501,170,725,479,359,963,465,706,146,282,828,962,492,996,943,828,437,392,605,943,468,335,501,170,725,479,359,963,465,706,146,282,828,962,492,996,943,828,437,392,605];
const len = 43;


function getOddOccurrence(a, len){

  let obj = {};

  for(let i=0; i<len;i++){
    if(obj[a[i]]){
      obj[a[i]] += 1;
    } else {
      obj[a[i]] = 1;
    }
  }
  
  for(const key in obj){
  	if(obj[key]%2 !== 0){
        return key
    }
  }
}

console.log(getOddOccurrence(a, len))
