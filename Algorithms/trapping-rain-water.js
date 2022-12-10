/*
Given an array arr[] of N non-negative integers representing the height of blocks.
If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
 

Example 1:

Input:
N = 6
arr[] = {3,0,0,2,0,4}
Output:
10
Explanation: 

Example 2:

Input:
N = 4
arr[] = {7,4,0,9}
Output:
10
Explanation:
Water trapped by above 
block of height 4 is 3 units and above 
block of height 0 is 7 units. So, the 
total unit of water trapped is 10 units.

Example 3:

Input:
N = 3
arr[] = {6,9,9}
Output:
0
Explanation:
No water will be trapped.


Your Task:
You don't need to read input or print anything. 
The task is to complete the function trappingWater() which takes arr[] and N 
as input parameters and returns the total amount of water that can be trapped.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)


Dynamic Programming
*/

function trappingWater(arr, n){
    let leftArr = [];
    let rightArr = [];
    let count = 0;

    leftArr[0] = arr[0]
    for (let i = 1; i < n; i++) {
        leftArr[i] = Math.max(leftArr[i - 1], arr[i]);
    }

    rightArr[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightArr[i] = Math.max(rightArr[i + 1], arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        count += Math.min(leftArr[i], rightArr[i]) - arr[i];
    }

    return count;
}

console.log(trappingWater([8, 8, 2, 4, 5, 5, 1], 7))
