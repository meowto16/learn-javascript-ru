/**
 * https://leetcode.com/problems/find-pivot-index
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let leftSum = 0
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0)

  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i - 1] || 0
    const current = nums[i]

    leftSum += prev;
    rightSum -= current;

    if (leftSum === rightSum) {
      return i
    }
  }

  return -1
};