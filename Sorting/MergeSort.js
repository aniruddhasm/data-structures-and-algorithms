const nums = [8,9,1,2,3,4,5,7,6];

const merge = (arr1, arr2) =>{
	let results = [];
	let i=0, j=0;
	while(i<arr1.length && j<arr2.length){
		if(arr1[i] < arr2[j]){
			results.push(arr1[i])
			i++;
		}else{
			results.push(arr2[j])
			j++;
		}
	}
	while(i<arr1.length){
		results.push(arr1[i])
		i++;
	}
	while(j<arr2.length){
		results.push(arr2[j])
		j++;
	}
	return results;
}


//console.log(merge([1, 100,200], [2,3,5,6]))

const mergeSort = (arr) =>{
	if(arr.length <= 1) return arr
	let mid = Math.floor(arr.length/2);
	let left = mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left,right);
}

console.log(mergeSort(nums));