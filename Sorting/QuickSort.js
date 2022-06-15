const nums = [100,-3,2,4,6,9,1,2,5,3,23]

function swap(arr, i, j){
	[arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start];
	let swapIdx = start;
	for (var i = start + 1; i < arr.length; i++) {
		if(pivot > arr[i]){
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

//console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr, left=0, right=arr.length-1){
	if(left < right){
		let pivotIdx = pivot(arr, left, right);
		//left
		quickSort(arr, left, pivotIdx-1);
		//right
		quickSort(arr, pivotIdx+1, right);
	}
	return arr;	
}

console.log(quickSort(nums))