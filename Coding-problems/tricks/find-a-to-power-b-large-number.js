// (a+b)%n = a%n + b%n
// (a-b)%n = a%n - b%n
// (a*b)%n = a%n * b%n
// n = (10 to p0wer 9) + 7


function fastPower(a, b, n = 1000000007) {
  let res = 1;
  while (b > 0) {
    if (b & 1 !== 0) {   // odd case
      res = (res * a % n) % n;
    }
    a = (a % n * a % n) % n;
    b = b >> 1;   // b =b/2
  }
  return res;
}

console.log(fastPower(2,5))
