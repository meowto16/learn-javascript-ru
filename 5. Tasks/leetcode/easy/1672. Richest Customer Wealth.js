/**
 * https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number|null}
 */
const maximumWealth = function(accounts) {
  let maxWealth = null

  for (const account of accounts) {
    const sum = account.reduce((sum, bankWealth) => sum + bankWealth, 0)
    maxWealth = Math.max(maxWealth, sum)
  }

  return maxWealth
};