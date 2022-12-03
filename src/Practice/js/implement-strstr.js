/*
Your task is to implement the function strstr. The function takes two strings as arguments (s,x) and  
locates the occurrence of the string x in the string s. The function returns and integer denoting 
the first occurrence of the string x in s (0 based indexing).

Note: You are not allowed to use inbuilt function.

Example 1:

Input:
s = GeeksForGeeks, x = Fr
Output: -1
Explanation: Fr is not present in the
string GeeksForGeeks as substring.

*/

function strstr(s, x){
    for (let i=0;i<s.length;i++){
        for(let j=0;j<x.length;j++){
            if(s[i+j] != x[j]){
                break;
            }else if(j === x.length-1){
                return i
            }
        }
    }
    return -1
}
