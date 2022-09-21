// https://www.codewars.com/kata/563b74ddd19a3ad462000054

function stringy(size) {
  const result = '10'.repeat(Math.ceil(size / 2))

  return size % 2 === 0
    ? result
    : result.slice(0, -1)
}