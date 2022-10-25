// https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter) {
  const UTF_16_OFFSET = 96
  const letterPosition = letter.toLowerCase().charCodeAt() - UTF_16_OFFSET

  return `Position of alphabet: ${letterPosition}`
}