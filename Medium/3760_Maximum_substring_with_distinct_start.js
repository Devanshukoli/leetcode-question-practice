/*
You are given a string s consisting of lowercase English letters.

Return an integer denoting the maximum number of substrings you can split s into such that each substring starts with a distinct character (i.e., no two substrings start with the same character).

 

Example 1:

Input: s = "abab"

Output: 2

Explanation:

Split "abab" into "a" and "bab".
Each substring starts with a distinct character i.e 'a' and 'b'. Thus, the answer is 2.
Example 2:

Input: s = "abcd"

Output: 4

Explanation:

Split "abcd" into "a", "b", "c", and "d".
Each substring starts with a distinct character. Thus, the answer is 4.

*/

// function maxDistinct(s) {
//   let num = 0;
//   let spl = s.split('')
//   for (let i = 0; i < spl.length; i++) {
//     if (spl[i] === spl[i + 1]) {
//       num = 1;
//       return num
//     }
//     num++
//   }
//   return num;
// };


// console.log(maxDistinct('abab')) // 2

// this failed because I didn't see that how many unique character is there that amounts of DISTINCT substring can happen, and also i'm just checking side by side compariosn.

return new Set(s).size;