Given two unsorted arrays A of size N and B of size M of distinct elements, the task is to find all pairs from both arrays whose sum is equal to X.

Example 1:

Input:
A[] = {1, 2, 4, 5, 7}
B[] = {5, 6, 3, 4, 8} 
X = 9 
Output: 
1 8
4 5 
5 4
Explanation:
(1, 8), (4, 5), (5, 4) are the
pairs which sum to 9.


Your Task:  
You don't need to read input or print anything. Your task is to complete the function allPairs() which takes the array A[], B[], its size N and M respectively and an integer X as inputs and returns the sorted vector pair values of all the pairs u,v where u belongs to array A and v belongs to array B. If no such pair exist return empty vector pair.
Note : All pairs should be printed in increasing order of u. For eg. for two pairs (u1,v1) and (u2,v2), if u1<u2 then
(u1,v1) should be printed first else second.


Expected Time Complexity: O(NLog(N))
Expected Auxiliary Space: O(N)
  
  
Solution:
  
def allPairs(A, B, N, M, X):    
        a_obj = {}
        b_obj = {}
        result = []
        for i in range(len(B)):
            b_obj[B[i]] = 1 
        
        for i in range(N):
            if((X-A[i]) in b_obj):
                result.append([A[i], X-A[i]])
        result.sort();
        return result
      
 allPairs([1,2 ,4 ,5 ,7], [5, 6, 3, 4, 8], 5, 5, 9)
