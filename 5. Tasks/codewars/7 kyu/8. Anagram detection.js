const countChars = (word) => {
  const chars = word.split('')
  const map = {}

  chars.forEach((char) => {
    char = char.toLowerCase()
    map[char] = (map[char] || 0) + 1;
  })

  return map
}

const areCharsCountEqual = (charsMap1, charsMap2) => {
  return Object.keys({ ...charsMap1, ...charsMap2 })
    .every((key) => {
      return charsMap1[key] === charsMap2[key]
    })
}

const isAnagram = (test, original) => {
  if (test.length !== original.length) return false

  const chars = {
    in: {
      test: countChars(test),
      original: countChars(original),
    }
  }

  return areCharsCountEqual(chars.in.test, chars.in.original)
};