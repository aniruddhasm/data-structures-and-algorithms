You are given the string S . Compress the string when lower and upper cases are the same. In compressed string characters should be in lowercase.

Example 1:

Input: S = "aaABBb"
Output: "3a3b"
Explanation: As 'a' appears 3 times
consecutively and 'b' also 3 times,
and 'b' and 'B' considered as same. 

â€‹Example 2:

Input: S = "aaacca"
Output: "3a2c1a"
Explanation: As 'a' appears 3 times
consecutively and 'c' also 2 times,
and then 'a' 1 time.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function transform() which takes the string S as inputs and returns the compressed string.


Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ |S| ≤ 2 * 105

S contains only lowercase and uppercase characters.


Solution

def transform(self, S):
count = 0
st = ''
S = S.lower()
x = S[0]
for i in range(len(S)):
    if S[i] == x:
        count += 1
    else:
        st += str(count) + S[i-1];
        x=S[i]
        count = 1
return st+str(count)+S[i]
