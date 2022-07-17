/**
 * https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript
 * Complete the function that takes two integers (a, b, where a < b) and return an array
 * of all integers between the input parameters, including them.
 */

function between(from, to) {
  const length = to - from + 1

  return Array.from({ length }, (_, i) => i + from)
}