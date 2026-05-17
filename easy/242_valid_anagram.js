/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

// function isAnagram(s, t) {
//   return s.split('').sort().join('') === t.split('').sort().join('')
// }

// console.log(isAnagram("anagram", "nagaram"))


// for follow up question we can use Arra.from() method instead of split("") because it will break when emoji comes into our strings.
// return Array.from(s).sort().join('') === Array.from(t).sort().join()

// new method


function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false
  }
  
  let count = {};
  
  for (const char of s) {
    count[char] = (count[char] || 0) + 1
  }
  
  for (const char of t) {
    if (!count[char]) {
      return false
    }
    
    count[char]--
  }

  return true
}
console.log(isAnagram("anagram", "nagaram"))