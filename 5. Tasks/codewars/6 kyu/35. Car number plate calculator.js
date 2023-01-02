// https://www.codewars.com/kata/5f25f475420f1b002412bb1f

function findTheNumberPlate(customerId){
  const leftCount = Math.floor(customerId / 999)
  const rightCount = customerId % 999

  const leftPart = (() => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const counters = [
      leftCount % alphabet.length,
      Math.floor(leftCount / alphabet.length) % alphabet.length,
      Math.floor(leftCount / alphabet.length ** 2) % alphabet.length,
    ]

    return counters.map(idx => alphabet[idx]).join('')
  })()

  const rightPart = String(rightCount + 1).padStart(3, '0')


  return leftPart + rightPart
}