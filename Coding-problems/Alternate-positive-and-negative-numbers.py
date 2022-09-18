Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate 
positive and negative numbers without changing the relative order of positive and negative numbers.
Note: Array should start with positive number.

Example 1:

Input: 
N = 9
Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2}
Output:
9 -2 4 -1 5 -5 0 -3 2


Example 2:

Input: 
N = 10
Arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output:
5 -5 2 -2 4 -8 7 1 8 0 



Solution :
def rearrange(self,arr, n):
  # code here

  pos = []
  neg = []

  for i in range(n):
      if arr[i] < 0:
          neg.append(arr[i])
      else:
          pos.append(arr[i])
  i=0
  tmp = []

  if(len(neg) == 0 or len(pos) == 0) :
      return arr

  if(len(neg) > 0 and len(pos) > 0):
      while(i<len(neg)):
          if(i<len(pos)):
              tmp.append(pos[i])
          tmp.append(neg[i])
          i += 1

      while(i<len(pos)):
          tmp.append(pos[i])
          i += 1

      for i in range(len(tmp)):
          arr[i] = tmp[i]

      return arr
