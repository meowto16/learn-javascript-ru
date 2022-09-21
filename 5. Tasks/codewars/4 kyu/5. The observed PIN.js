// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(observed) {
  const keypad = {
    '0': ['8', '0'],
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9']
  }

  const digits = observed.split('')
  const variants = digits.map((digit) => keypad[digit])

  const recursive = (tail, variants) => {
    const [possibleDigits, ...other] = variants
    const permutations = []
    const isRecursive = Boolean(other.length)

    possibleDigits.forEach((possibleDigit) => {
      permutations.push(...(isRecursive ? recursive(tail + possibleDigit, other) : [tail + possibleDigit]))
    })

    return permutations
  }

  const possible = recursive('', variants)

  return possible
}
