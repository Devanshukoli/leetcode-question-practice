/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:

Input: s = "paper", t = "title"

Output: true


*/

function isomorphic(s, t) {

  if (s.length !== t.length) {
    return false;
  }

  let splitedT = t.split('');

  let sToT = new Map();
  let tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = splitedT[i];

    if (sToT.has(sChar) && tToS.get(tChar) !== sChar) {
      return false
    }

    if (tToS.has(tChar) && sToT.get(sChar) !== tChar) {
      return false;
    }

    sToT.set(sChar, tChar)
    tToS.set(tChar, sChar)

  }
  return true;
}

console.log(isomorphic('foo', 'bar')) // false


// second way 
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const n = s.length;
  const mapST = new Map();
  const mapTS = new Map();


  /*
   * {
   *  [char]: mappedChar
   * }
   */

  for (let i = 0; i < n; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!mapST.has(charS)) {
      mapST.set(charS, charT);
    }

    if (!mapTS.has(charT)) {
      mapTS.set(charT, charS);
    }

    if (
      mapST.get(charS) !== charT || mapTS.get(charT) !== charS
    ) return false;
  }

  return true;
};