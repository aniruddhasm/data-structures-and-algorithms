// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,6,11,7,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2,6,11,7,15], target = 9;

function getIndexes(nums, target){
	let obj = {};
	const length = nums.length;
	for (let i = 0; i < length; i++) {
		if(nums[i] in obj){
			//return [target-nums[i], nums[i]]; // to get the values
			return [obj[nums[i]], i]; // to get the index
		}
		obj[target - nums[i]] = i; //{7:0, 3:1, -2:2}
	}
	return [];
}

console.log(getIndexes(nums, target))