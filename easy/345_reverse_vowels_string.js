/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

*/

function reverseVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const char = s.split('')

  let left = 0;
  let right = char.length - 1;

  while (left < right) {

    while (left < right && !vowels.has(char[left])) {
      left++
    }

    while (left < right && !vowels.has(char[right])) {
      right--
    }

    [char[left], char[right]] = [char[right], char[left]]

    left++
    right--
  }
  return char.join('')

}

console.log(reverseVowels('IceCreAm')) // AceCreIm