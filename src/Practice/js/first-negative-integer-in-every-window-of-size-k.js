/*
Given an array A[] of size N and a positive integer K, find the first negative integer for each and every 
window(contiguous subarray) of size K.

 

Example 1:

Input : 
N = 5
A[] = {-8, 2, 3, -6, 10}
K = 2
Output : 
-8 0 -6 -6
Explanation :
First negative integer for each window of size k
{-8, 2} = -8
{2, 3} = 0 (does not contain a negative integer)
{3, -6} = -6
{-6, 10} = -6

 
Example 2:

Input : 
N = 8
A[] = {12, -1, -7, 8, -15, 30, 16, 28}
K = 3
Output :
-1 -1 -7 -15 -15 0 

 

Your Task: 
You dont need to read input or print anything. Your task is to complete the function printFirstNegativeInteger()
 which takes the array A[], its size N and an integer K as inputs and returns the first negative number in every window of size K 
 starting from the first till the end. If a window does not contain a negative integer , then return 0 for that window.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(K)

*/
//Solution - Brute-force method


function printFirstNegativeInteger(n, k, arr){
    let ans = new Array(n-k+1).fill(0);
    let l = 0
    for(let i=0; i<n-k+1; i++){
        for(let j=i; j<i+k && (i+k)<=n;j++){
            if(arr[j]<0){
                ans[l] = arr[j];
                break;
            }
        }
        l++;
    }
    return ans
}



console.log(printFirstNegativeInteger(5, 2, [-8, 2, 3, -6, 10]))