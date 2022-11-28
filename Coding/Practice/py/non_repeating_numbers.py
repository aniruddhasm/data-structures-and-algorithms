Given an array A containing 2*N+2 positive numbers, out of which 2*N numbers exist in pairs whereas the other two number occur exactly 
once and are distinct. Find the other two numbers. Return in increasing order.


Example 1:

Input: 
N = 2
arr[] = {1, 2, 3, 2, 1, 4}
Output:
3 4 
Explanation:
3 and 4 occur exactly once.

Example 2:

Input:
N = 1
arr[] = {2, 1, 3, 2}
Output:
1 3
Explanation:
1 3 occur exactly once.


Your Task:
You do not need to read or print anything. Your task is to complete the function singleNumber() which takes the array 
as input parameter and returns a list of two numbers which occur exactly once in the array. The list must be in ascending order.


Expected Time Complexity: O(N)
Expected Space Complexity: O(1)


Constraints:
1 <= length of array <= 106 
1 <= Elements in array <= 5 * 106



Solution

def singleNumber(self, nums):
	xor_sum = 0
	for i in nums:
	    xor_sum ^= i

    right_bit = xor_sum & ~(xor_sum-1)
    x=0
    y=0
    for i in nums:
        if( i&right_bit):
            x ^= i
        else:
            y ^= i
            
    if x > y:
        x, y = y, x
    return [x, y]
