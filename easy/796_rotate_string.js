/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.

*/

function rotateString(s, goal) {
  return (s + s).includes(goal);
}

console.log(rotateString('abcde', 'cdeab'))

// second way to solve.


function rotateString2(s, goal) {
  if (s.length !== goal.length) return false

  for (let i = 0; i < s.length; i++) {
    // this for edge case , what if s = abc and goal = abc ( that means no rotation needed.)
    if (s === goal) {
      return true
    }

    // slice remove the first char and s[0] adds the first character at the end of the sliced string. and also that is in loop so...
    s = s.slice(1) + s[0]
  }
}

console.log(rotateString2('abcde', 'cdeab'))