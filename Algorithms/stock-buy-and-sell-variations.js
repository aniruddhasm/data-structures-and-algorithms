//stock-buy-and-sell-max-profit.js
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



//stock-buy-and-sell-multiple-times-max-profit.js
function stockBuySellMultipleTimes(A, n) {
  let profit = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      profit += A[i] - A[i - 1]
    }
  }
  return profit
}

console.log(stockBuySellMultipleTimes([100, 180, 260, 310, 40, 535, 695]))

