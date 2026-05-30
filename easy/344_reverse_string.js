/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

function reverseString(s) {
  return s.reverse()
}

console.log(reverseString(["h","e","l","l","o"]))


// second way (using in-place algorithm.)

function reverseString(str) {
  let left = 0
  let right = str.length - 1;
  
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]]
    
    left++
    right--
  }
  
  return str
}
console.log(reverseString(["h","e","l","l","o"]))