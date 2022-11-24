function permutation(s, t) {
  let arr = new Array(128).fill(0);
  for (const aa of s) {
    const value = aa.charCodeAt(0)
    arr[value]++
  }

  for (const aa of t) {
    const value = aa.charCodeAt(0)
    arr[value]--
  }

  for (const aa of arr) {
    if (aa !== 0) {
      return false
    }
  }
  return true
}

console.log(permutation("dogg", "god"))
