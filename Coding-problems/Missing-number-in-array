Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
Input:
N = 5
A[] = {1,2,3,5}
Output: 4



Solution: - 

const a = [2];
const n = 2;


function MissingNumber(a,n){
	n = a.length;
	let total = Math.floor((n + 1) * (n + 2) / 2);
  for(let i = 0; i < a.length; i++){
  	total -= a[i];
  }
  return total;
}

console.log(MissingNumber(a,n))
