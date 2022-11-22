let a = [1, 3, 4, 5, 7]
let b = [2, 3, 5, 6]

function getCommon(a, b) {
  let i = 0,
    j = 0,
    count = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++
    } else if (a[i] > b[j]) {
      j++
    } else if (a[i] === b[j]) {
      j++
      i++;
      count++
    }
  }

  return count;
}
console.log(getCommon(a, b))
