//ES5 version
function bubbleSortES5(arr){
	var noSwaps = false;
	for(var i = arr.length; i > 0; i--){
		noSwaps = true;
		for(var j = 0; j < i - 1; j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
				noSwaps = false;
			}
		}
		if(noSwaps) break;
	}
	return arr;
}


//ES6 version
const bubbleSort = (arr) =>{
	let noSwaps = false;
	for (let i = arr.length; i > 0; i--){
		noSwaps = true;
		for (let j = 0; j < i - 1; j++){
			if(arr[j]>arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
				noSwaps = false;
			}
		}
		if(noSwaps) break;
	}
	return arr;
}


console.log(bubbleSort([8,1,2,3,4,5,6,7]));