/*
Given a string S. The task is to find all permutations of a given string.

Example 1:

Input:
S = ABC
Output: ABC ACB BAC BCA CAB CBA 

Example 2:

Input:
S = ABSG
Output: ABGS ABSG AGBS AGSB ASBG ASGB
BAGS BASG BGAS BGSA BSAG BSGA GABS
GASB GBAS GBSA GSAB GSBA SABG SAGB
SBAG SBGA SGAB SGBA

 

Your Task:
This is a function problem. You only need to complete the function 
permutation that takes S as parameter and returns the list of permutations
in lexicographically increasing order. The newline is automatically added by driver code.

*/


Solution:

function permutation(str) {
    // code here
    let n = str.length;
    permut(str, 0, n - 1);
}

function permut(s, l, r) {
    if (l === r) {
        console.log(s);
        return
    }

    for (let i = l; i < r; i++) {
        s = swap(s, l, i);
        permut(s, l + 1, r);
        s = swap(s, l, i)
    }
}


function swap(a, i, j) {
    let temp;
    let charArray = a.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}
