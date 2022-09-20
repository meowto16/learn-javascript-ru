// https://www.codewars.com/kata/5c3433a4d828182e420f4197

const ultimateReverse = sentence => {
  const lengths = sentence.map((word) => word.length)
  const reversed = sentence.join('').split('').reverse().join('')

  let reversedSentence = reversed

  return lengths.map(length => {
    const part = reversedSentence.slice(0, length)
    reversedSentence = reversedSentence.slice(length)

    return part
  })
};