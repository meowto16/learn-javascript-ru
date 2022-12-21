function nextBigger(n){
  const digits = String(n).split('')
  const permutations = []
  const permutate = (digits, tail) => {
    const seenDigits = {}

    digits.forEach((digit, idx) => {
      if (seenDigits[digit]) return;

      const digitsLeft = [...digits]
      digitsLeft.splice(idx, 1)

      seenDigits[digit] = true

      if (digitsLeft.length >= 1) {
        return permutate(digitsLeft, tail + digit)
      } else {
        permutations.push(Number(tail + digit))
      }
    })
  }

  permutate(digits, '')
  permutations.sort((a, b) => a - b)

  const foundIdx = permutations.findIndex((number) => number === n)

  return permutations[foundIdx + 1] || -1
}