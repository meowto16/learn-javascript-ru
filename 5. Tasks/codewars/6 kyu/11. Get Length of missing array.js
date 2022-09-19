// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arr) {
  if (!arr?.length) return 0

  const lengths = {}

  for (let inner of arr) {
    if (!inner?.length) return 0

    lengths[inner.length] = inner.length
  }

  const keys = Object.keys(lengths)
  let lastKey = Number(keys[0])

  for (let i = 1; i < keys.length; i++) {
    const currentKey = Number(keys[i])
    const shouldBeKey = lastKey + 1

    if (currentKey !== shouldBeKey) return shouldBeKey

    lastKey = shouldBeKey
  }

  return 0
}