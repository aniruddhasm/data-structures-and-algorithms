/*
Given an array of names (consisting of lowercase characters) of candidates in an election. 
A candidate name in array represents a vote casted to the candidate. Print the name of candidate that received Max votes. 
If there is tie, print lexicographically smaller name.

Input:
n = 13
Votes[] = {john,johnny,jackie,johnny,john 
jackie,jamie,jamie,john,johnny,jamie,
johnny,john}
Output: john 4
Explanation: john has 4 votes casted for 
him, but so does johny. john is 
lexicographically smaller, so we print 
john and the votes he received.



*/

function winner(arr, n){
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
       if (obj[arr[i]]) {
          obj[arr[i]] += 1
       } else {
          obj[arr[i]] = 1
       }
    }

    let max = 0
    let winner = ''
    for (const key in obj) {
       if (obj[key] > max) {
          max = obj[key]
          winner = key
       } else if (obj[key] == max && winner > key) {
          winner = key
       }
    }
    return [winner, max]
}

console.log(winner(['andyy','blake','clark'], 3))
