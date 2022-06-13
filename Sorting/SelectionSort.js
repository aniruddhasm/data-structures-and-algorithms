const nums = [8,9,1,2,3,6,4,5];

function selectionSort(arr){
  const length = arr.length;
	for(let i=0; i<length-1; i++){
  	let lowest = i;
    for(let j=i+1; j<length; j++){
    	// console.log("j==",lowest, j)
    	if(arr[j]<arr[lowest]){
      	lowest = j;
      }
    }
    // console.log("i==",lowest, i)
    if(i !== lowest){
    	[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr;
}


console.log(selectionSort(nums))
