const nums = [8,9,1,2,3,4,5,7,6];

function insertionSort(arr){
	const length = arr.length;
	let currentVal = 0;
	for (let i = 1; i < length; i++) {
		currentVal = arr[i];
		for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = currentVal;
	}
	return arr;
}

console.log(insertionSort(nums))