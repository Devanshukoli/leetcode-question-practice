/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

function canConstruct(ransomNote, magazine) {
  let count = {}

  for (let char of magazine) {
    count[char] = (count[char] || 0) + 1
  }

  for (let char of ransomNote) {
    if (!count[char]) {
      return false
    }
    count[char]--
  }
  return true;
}

console.log(canConstruct('aa', "ab"))



// Second method. 
function canConstruct(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];
    if (magazine.includes(char)) {
      magazine = magazine.replace(char, '')
    } else {
      return false
    }
  }

  return true
}
