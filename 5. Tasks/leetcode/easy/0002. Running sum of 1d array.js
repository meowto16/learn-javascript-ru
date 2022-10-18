/**
 * https://leetcode.com/problems/running-sum-of-1d-array
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  let lastSum = 0

  return nums.map(num => {
    lastSum += num
    return lastSum
  })
};