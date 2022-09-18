// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

//     For example, 121 is a palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


let x = 121;

//iterative approach
function isPalindromeIterative(number){
	const length = number.length-1;
	for (let i = 0; i <= length; i++) {
		if(number[i] !== number[length-i]){
			return false;
		}
	}
	return true;
}

//recursive approach
function isPalindromeRecursive(number){
	if(number.length === 1) return true;
	if(number.length === 2) return number[0] === number[1];
	if(number[0] === number.slice(-1)) return isPalindromeRecursive(number.slice(1,-1));
	return false;
}

x = x.toString();
console.log(isPalindromeIterative(x));
console.log(isPalindromeRecursive(x));



