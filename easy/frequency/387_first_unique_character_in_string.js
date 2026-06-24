/*


*/

// const firstUniqChar = (s) => {
//   const arr = s.split('')

//   for (let i = 0; i < arr.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         isUnique = false
//         break;
//       } 
//     }
//     if (isUnique) return i
//   }
//   return - 1
// }

// console.log(firstUniqChar('loveleetcode'))


// other methods

const firstUniqChar = (s) => {
  let freq = {};
  
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1)
      return i;
  }
  
  return -1;
}
console.log(firstUniqChar('loveleetcode'))