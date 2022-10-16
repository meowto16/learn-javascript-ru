// https://www.codewars.com/kata/588f3e0dfa74475a2600002a

function possibilities(str) {
  const permutations = []
  const position = str.indexOf('?')

  if (position === -1) {
    return [str]
  }

  const first = str.slice(0, position) + '0' + str.slice(position + 1)
  const second = str.slice(0, position) + '1' + str.slice(position + 1)

  permutations.push(
    ...possibilities(first),
    ...possibilities(second),
  )

  return permutations;
}
