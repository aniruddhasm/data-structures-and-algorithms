function fib(n){
	if(n <= 2) return 1;
  	return fib(n-1) + fib(n-2);
}
console.log(fib(40))



// Dynamic programming with memoization.

function fib(n, memo = []){
	if(memo[n] !== undefined) return memo[n];
	if(n <= 2) return 1;
  	let res = fib(n-1, memo) + fib(n-2, memo);
	memo[n] = res;
	return res;
}
console.log(fib(40))



//iterative tabulation bottom up approach
function fib(n){
	if(n <= 2) return 1;
  	let numsArr = [0, 1, 1];
  	for(let i=3; i<=n; i++){
  		numsArr[i] = numsArr[i-1] + numsArr[i-2];
  	}
  	return numsArr[n];
}

console.log(fib(40))
