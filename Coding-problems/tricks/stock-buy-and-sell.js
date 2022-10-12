The cost of stock on each day is given in an array A[] of size N. Find all the segment of days on which you buy and sell the stock so that in between those days your profit is maximum.

Note: Since there can be multiple solutions, the driver code will return 1 if your answer is correct, otherwise, it will return 0. In case there's no profit the driver code will return the string "No Profit" for a correct solution.

Example 1:

Input:
N = 7
A[] = {100,180,260,310,40,535,695}
Output:
1
Explanation:
One possible solution is (0 3) (4 6)
We can buy stock on day 0,
and sell it on 3rd day, which will 
give us maximum profit. Now, we buy 
stock on day 4 and sell it on day 6.

Example 2:

Input:
N = 5
A[] = {4,2,2,2,4}
Output:
1
Explanation:
There are multiple possible solutions.
one of them is (3 4)
We can buy stock on day 3,
and sell it on 4th day, which will 
give us maximum profit.


Your Task:
The task is to complete the function stockBuySell() which takes an array A[] and N as input parameters and finds the days of buying and selling stock. 
The function must return a 2D list of integers containing all the buy-sell pairs i.e. 
first value of pair will represent the day on which you buy the stock and second value represent the day on which you sell that stock.
If there is No Profit, return an empty list.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)



solution:

stockBuySell(A, n){
    //your code here
    let minAmount = A[0]
    let maxProfit = 0;
    let sellDay = 0;
    let abc = [];
    for(let i=0; i<A.length;i++){
        if(A[i]>minAmount){
            let diff = A[i] - minAmount
            abc.push([sellDay, i])
            minAmount = A[i];
            sellDay = i       
        }
        if(A[i]<minAmount){
            sellDay = i
            minAmount = A[i]
        }
    }
    return abc
}


console.log(stockBuySell([100,180,260,310,40,535,695])
