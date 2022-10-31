// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(string) {
  const letters = string.split('')
  const permutations = []

  function recursive(letters, tail = '') {
    if (letters.length === 1) return permutations.push(tail + letters[0])

    const tree = {}

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i]

      if (tree[letter]) continue

      const otherLetters = [...letters]
      otherLetters.splice(i, 1)

      tree[letter] = recursive(otherLetters, tail + letter)
    }

    return tree
  }

  recursive(letters)

  return permutations
}