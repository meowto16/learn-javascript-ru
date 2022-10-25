// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(letters) {
  let lastCharCode

  for (const letter of letters) {
    const charCode = letter.charCodeAt()
    const diff = charCode - lastCharCode

    if (diff > 1) {
      return String.fromCharCode(lastCharCode + 1)
    }

    lastCharCode = charCode
  }

  return null
}