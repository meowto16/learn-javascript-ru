// https://www.codewars.com/kata/580a4734d6df748060000045

function isSortedAndHow(array) {
  const isSortedAscending = array.every((current, i) => {
    const previous = array[i - 1] ?? -Infinity

    return current >= previous;
  })

  const isSortedDescending = array.every((current, i) => {
    const previous = array[i - 1] ?? Infinity

    return current <= previous
  })

  if (isSortedAscending) return 'yes, ascending'
  if (isSortedDescending) return 'yes, descending'

  return 'no'
}