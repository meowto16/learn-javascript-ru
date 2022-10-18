/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  let steps = 0;

  while (num > 0) {
    if (num % 2 === 1) {
      num -= 1;
      steps++;
    }

    if (num) {
      num /= 2;
      steps++;
    }
  }

  return steps;
};