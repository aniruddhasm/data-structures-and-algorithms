
//helper fn 1
const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//helper fn 2
const digitCount = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//helper fn 3
const mostDigits = (nums) => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}


//actual implementation
const radixSort = (nums) => {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length: 10}, () => []);
		for(let i = 0; i < nums.length; i++){
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);		
	}
	return nums;
}

console.log(radixSort([10,27,2772,377, 15,2333,9865]));