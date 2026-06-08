/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1
*/


const singleNumber = (nums) => {
  let freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1

  }

  for (let num of nums) {
    
    if (freq[num] === 1) {
      return num;
    }
  }
  
};

console.log(singleNumber([2, 2, 1]))