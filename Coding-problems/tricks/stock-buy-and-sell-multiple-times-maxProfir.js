Solution:
function stockBuySell(A, n) {
  let profit = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      profit += A[i] - A[i - 1]
    }
  }
  return profit
}

console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695]))
