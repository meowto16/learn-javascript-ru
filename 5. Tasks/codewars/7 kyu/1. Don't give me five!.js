/**
 * https://www.codewars.com/kata/5813d19765d81c592200001a
 */

const dontGiveMeFive = (start, end) => Array
  .from({ length: end - start + 1 }, (_, i) => i + start)
  .filter((num) => !String(num).includes('5'))
  .length