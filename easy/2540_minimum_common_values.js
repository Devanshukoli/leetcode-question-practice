/*
  Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.
Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
*/

// const getCommon = (nums1, nums2) => {
//   let result = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         result.push(nums1[i])
//       }
//     }
//   }
//   const finalResult = result.sort((a,b) => a - b)
//   return finalResult[0]
// }

// console.log(getCommon([3, 4, 5, 10, 12, 15, 16, 16, 25, 48, 51, 69, 74, 74, 78, 78, 78, 82, 82, 88], [3, 8, 9, 10, 13, 16, 24, 25, 27, 29, 34, 39, 55, 62, 70, 80, 83, 87, 92, 94]))




const getCommon = (nums1, nums2) => {
  let seen = new Set(nums1)
  for (let i = 0; i < nums2.length; i++) {
    if (seen.has(nums2[i])) {
      return nums2[i]
    }
  }
  return -1
}
console.log(getCommon([3, 4, 5, 10, 12, 15, 16, 16, 25, 48, 51, 69, 74, 74, 78, 78, 78, 82, 82, 88], [3, 8, 9, 10, 13, 16, 24, 25, 27, 29, 34, 39, 55, 62, 70, 80, 83, 87, 92, 94]))


