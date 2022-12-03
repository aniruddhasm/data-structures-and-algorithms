/*
You are given two numbers A and B. The task is to count the number of bits needed to be flipped to convert A to B.
Example 1:

Input: A = 10, B = 20
Output: 4
Explanation:
A  = 01010
B  = 10100
As we can see, the bits of A that need 
to be flipped are 01010. If we flip 
these bits, we get 10100, which is B.


Input: A = 20, B = 25
Output: 3
Explanation:
A  = 10100
B  = 11001
As we can see, the bits of A that need 
to be flipped are 10100. If we flip 
these bits, we get 11001, which is B.
*/

function countBitsFlip(a, b) {
    let n = a ^ b // 110 ^ 101
    let count = 0;
    while(n > 0){
      n = n & (n-1) // This keeps removing the most significant no from the bit i.e.
      count++
    }
    return count;
}

console.log(countBitsFlip(20, 25))