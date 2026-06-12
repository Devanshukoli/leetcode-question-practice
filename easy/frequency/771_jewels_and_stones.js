/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

*/


const numOfJewelesInStones = (j, s) => {
  let freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // now i want to do sum from my freq store, but for those who match with j char
  let sum = 0;
  for (let char of j) {
    sum += freq[char] || 0;
  }
  return sum;

}

console.log(numOfJewelesInStones('aA', "aAAbbbb"))

// second method
var numJewelsInStones = function (jewels, stones) {
  return stones.split('').filter((item) => jewels.split('').includes(item)).length
};