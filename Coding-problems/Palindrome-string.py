#Palindrome string using recursion

def isPal(str1, l, r):
  if l >= r :
    return True
    
  if str1[l] != str1[r] :
    return False

  return isPal(str1, l + 1, r - 1);

print(isPal('racecar', 0, 6))




# iterative approach
def isPal(str1):
    for i in range(len(str1)):
        r = len(str1)-1-i
        if i <= r and str1[i] != str1[r] :
            return False
    return True
    
    
print(isPal('racecar'))
