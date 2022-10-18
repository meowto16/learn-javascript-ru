/**
 * https://leetcode.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;

    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
    if (num % 3 === 0) return "Fizz"
    if (num % 5 === 0) return "Buzz"

    return String(num)
  })
};