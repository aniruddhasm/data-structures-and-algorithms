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

function useRecursion(a,b){
  if(b == 0){
  	return 1;
  }
  return useRecursion(a,b-1) * a;
}

console.log(fastPower(2,5)) // O (logn)
console.log(useRecursion(2,5)) // O (n)
