Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively i.e 
first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.
Note: Modify the original array itself.


Example 1:

Input:
N = 6
arr[] = {1,2,3,4,5,6}
Output: 6 1 5 2 4 3
Explanation: Max element = 6, min = 1, 
second max = 5, second min = 2, and 
so on... Modified array is : 6 1 5 2 4 3.


Example 2:

Input:
N = 11
arr[]={10,20,30,40,50,60,70,80,90,100,110}
Output:110 10 100 20 90 30 80 40 70 50 60
Explanation: Max element = 110, min = 10, 
second max = 100, second min = 20, and 
so on... Modified array is : 
110 10 100 20 90 30 80 40 70 50 60.




Solution:
rearrange(arr, n){
    let tmp = []
    let start = 0;
    let end = arr.length -1
    while(start <= end){
      tmp.push(arr[end]);
      tmp.push(arr[start]);
      start++;
      end--;
    }
    for(let i=0; i<tmp.length; i++){
       arr[i] = tmp[i]
    }
    return arr;
}


console.log(rearrange([1,2,3,4,5,6], 5)
