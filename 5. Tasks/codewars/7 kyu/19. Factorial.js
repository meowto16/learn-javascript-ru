// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError()

  let sum = 1

  while (n > 0) {
    sum *= n
    n--
  }

  return sum
}