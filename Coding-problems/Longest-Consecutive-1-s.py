Given a number N. Find the length of the longest consecutive 1s in its binary representation.

Example 1:

Input: N = 14
Output: 3
Explanation: 
Binary representation of 14 is 
1110, in which 111 is the longest 
consecutive set bits of length is 3.

Example 2:

Input: N = 222
Output: 4
Explanation: 
Binary representation of 222 is 
11011110, in which 1111 is the 
longest consecutive set bits of length 4. 

Your Task: 
You don't need to read input or print anything. Your task is to complete the function maxConsecutiveOnes() which returns the length of the longest consecutive 1s in the binary representation of given N.

Expected Time Complexity: O(log N).
Expected Auxiliary Space: O(1).
  
  
 def maxConsecutiveOnes(N):
      binary = str(bin(N).replace("0b", ""))
      result = []
      string = ""

      for i in binary:
          if i == '1':
              string = string + i
          else:
              result.append(string)
              string = ""
      result.append(string)   
      max_len = 0

      if len(result) == 0 : 
          return 0

      if len(result) > 0 : 
          for i in result:
              max_len = max(max_len, len(i))
          return max_len
        
        
maxConsecutiveOnes(0)
