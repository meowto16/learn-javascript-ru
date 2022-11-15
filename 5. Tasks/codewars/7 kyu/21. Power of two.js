// https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n){
  if (n === 1) return true
  if (!Number.isInteger(n) || n < 1) return false

  return isPowerOfTwo(n / 2)
}