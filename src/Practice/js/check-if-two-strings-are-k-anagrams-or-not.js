/*
Given two strings of lowercase alphabets and a value K, your task is to complete the given function which tells if  
two strings are K-anagrams of each other or not.

Two strings are called K-anagrams if both of the below conditions are true.
1. Both have same number of characters.
2. Two strings can become anagram by changing at most K characters in a string.

Example:

Input:
str1 = "fodr", str2="gork"
k = 2
Output:
1
Explanation: Can change fd to gk


*/

function areKAnagrams(str1, str2, k){
  if(str1.length!==str2.length){
   return false
  }
  var obj1={}
  for(let i=0;i<str1.length;i++){
    if(obj1[str1[i]]){
     obj1[str1[i]]++
    }
    else{
     obj1[str1[i]]=1
    }
  }
  for(let i=0;i<str2.length;i++){
     if(obj1[str2[i]]){
         obj1[str2[i]]--
     }
     else{
         obj1[str2[i]]=-1
     }
   }

  var count=0
  Object.keys(obj1).forEach(function(item){
        if(obj1[item]>=1){
           count+=obj1[item]
        }
   })
  if(count<=k){
    return true
  }
  return false
}
