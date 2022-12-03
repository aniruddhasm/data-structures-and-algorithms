/*
    Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
    is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
    Time Complexity: O(n)
*/
const isPalindromePermutations = (s) => {
  let charHash = new Array(128).fill(0)
  let charCode;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    charCode = s[i].charCodeAt(0)
    charHash[charCode]++;

    if (charHash[charCode] & 1 !== 0) {
      count++
    } else {
      count--
    }

  }
  return count <= 1;
}

console.log(isPalindromePermutations("aa"))
