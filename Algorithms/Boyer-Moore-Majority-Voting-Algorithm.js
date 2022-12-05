/*
The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among 
he given elements that have more than N/ 2 occurrences. 
This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, 
which works in O(N) time complexity and O(1) space complexity.

More details = https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
*/

function mj(a) {
  let ansIdx = 0;
  let count = 0;
  let len = a.length;

  for (let i = 1; i < len; i++) {
    if (a[i] === a[ansIdx]) {
      count++;
    } else {
      count--;
    }

    if (count <= 0) {
      ansIdx = i;
      count = 1;
    }
  }

  count = 0;
  for (let i = 0; i < len; i++) {
    if (a[i] === a[ansIdx]) {
      count++;
      if (count > (len / 2)) {
        return a[i];
      }
    }
  }
  return -1;
}
console.log(mj([1, 2, 2, 1, 2, 3, 3, 3, 3, 3, 3, 1]));
