/**
 * https://leetcode.com/problems/find-pivot-index
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const sumLeft = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0)
    const sumRight = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0)

    if (sumLeft === sumRight) {
      return i
    }
  }

  return -1
};