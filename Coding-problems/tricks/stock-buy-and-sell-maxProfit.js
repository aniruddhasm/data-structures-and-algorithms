Solution:
function stockBuySell(A, n) {
  let minAmount = A[0]
  maxProfit = 0;
  for (let i = 0; i < A.length; i++) {
    minAmount = Math.min(minAmount, A[i]);
    let diff = A[i] - minAmount;
    maxProfit = Math.max(diff, maxProfit);
  }
  return maxProfit;
}

console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695]))
