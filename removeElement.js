/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 * https://leetcode.com/problems/remove-element/
 */
// var removeElement = function(nums, val) {
//   while (nums.indexOf(val) != -1) {
//     nums.splice(nums.indexOf(val), 1)
//   }
// }

var removeElement = function(nums, val) {
  var i = 0
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j]
      i++
    }
  }

  return i
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
