// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

function tripledouble(num1, num2) {
  const FOUND_RESPONSE = 1
  const NOT_FOUND_RESPONSE = 0

  const possibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [first, second] = [num1, num2].map(String)

  for (const possible of possibles) {
    const triple = String(possible).repeat(3)
    const double = String(possible).repeat(2)

    const foundTripleInFirst = first.indexOf(triple) !== -1
    const foundDoubleInSecond = second.indexOf(double) !== -1

    if (foundTripleInFirst && foundDoubleInSecond) {
      return FOUND_RESPONSE
    }
  }

  return NOT_FOUND_RESPONSE
}