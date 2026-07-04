/*

Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
*/


const buddyStrings = (s, goal) => {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const seen = new Set();
    for (const ch of s) {
      if (seen.has(ch)) return true;
      seen.add(ch);                    
    }
    return false;
  }

  const diffs = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diffs.push(i);
    if (diffs.length > 2) return false;
  }

  return (
    diffs.length === 2 &&
    s[diffs[0]] === goal[diffs[1]] &&
    s[diffs[1]] === goal[diffs[0]]
  );
};

// ---- examples ----------------------------------------------------
console.log(buddyStrings("ab", "ba"));          // true
console.log(buddyStrings("ab", "ab"));          // false
console.log(buddyStrings("aa", "aa"));          // true   ← fixed
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb")); // true
