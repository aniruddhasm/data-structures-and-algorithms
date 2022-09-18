Given a string S consisting of lowercase Latin Letters. Return the first non-repeating character in S. 
If there is no non-repeating character, return '$'.

Example 1:

Input:
S = hello
Output: h
Explanation: In the given string, the
first character which is non-repeating
is h, as it appears first and there is
no other 'h' in the string.


Example 2:

Input:
S = zxvczbtxyzvy
Output: c
Explanation: In the given string, 'c' is
the character which is non-repeating. 


Solution:

function nonrepeatingCharacter(s){
    let obj = {};
    let temp =[]
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            obj[s[i]] += 1;
        } else {
            obj[s[i]] = 1
        }
    }

    for(const key in obj){
        if(obj[key] === 1){
            return key;
        }
    }

    return "$"
}



console.log(nonrepeatingCharacter("hello"))

