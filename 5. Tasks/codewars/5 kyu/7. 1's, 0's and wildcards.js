// https://www.codewars.com/kata/588f3e0dfa74475a2600002a

function possibilities(str) {
  const permutations = []

  if (str.indexOf('?') === -1) {
    return [str]
  }

  permutations.push(
    ...possibilities(str.replace('?', '0')),
    ...possibilities(str.replace('?', '1')),
  )

  return permutations;
};