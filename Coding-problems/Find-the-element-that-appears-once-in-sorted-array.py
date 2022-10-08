Given a sorted array arr[] of size N. Find the element that appears only once in the array. All other elements appear exactly twice. 

xample 1:

Input:
N = 11
arr[] = {1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65}
Output: 4
Explanation: 4 is the only element that 
appears exactly once.

 

Your Task:  
You don't need to read input or print anything. 
Complete the function findOnce() which takes sorted array and its size as its input parameter and returns the element that appears only once. 

Expected Time Complexity: O(log N)
Expected Auxiliary Space: O(1)
  
Solution:
  
def findOnce(arr : list, n : int):
    a = 0
    for i in range(n):
        a = a^arr[i]

    return a
  

findOnce([1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65], 11)
