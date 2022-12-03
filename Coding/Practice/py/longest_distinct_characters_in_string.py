Given a string S, find length of the longest substring with all distinct characters. 

Example 1:

Input:
S = "geeksforgeeks"
Output: 7
Explanation: "eksforg" is the longest 
substring with all distinct characters.

â€‹Example 2:

Input: 
S = "aaa"
Output: 1
Explanation: "a" is the longest substring 
with all distinct characters.


Your Task:
You don't need to read input or print anything. Your task is to complete the function longestSubstrDitinctChars() which takes the string S as input and returns the length of the longest substring with all distinct characters.


Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(K), where K is Constant.

class Solution:

    def longestSubstrDistinctChars(self, S):
        # code here
        m = 0
        for i in range(len(S)):
            count = 0
            l = []
            for j in range(i,len(S)):
                if S[j] in l:
                    break
                else:
                    l.append(S[j])
                    count += 1
            m = max(m, count)
        return m
