function binarySearch(arr, ele){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start + end)/2);    
    while(arr[mid] !== ele && start <= end){
        if(arr[mid] > ele){
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
    }
    return (arr[mid] === ele) ? mid : -1;
}

const nums = [1,2,3,5,7,9,10,14,20];
const search = 9;

console.log(binarySearch(nums, search));