// https://www.codewars.com/kata/570a6a46455d08ff8d001002

function noBoringZeros(n) {
  if (n === 0) return n

  return +String(n).replace(/[0]+$/g, '')
}