// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  const hashMap = markers.reduce((acc, cur) => {
    acc[cur] = true;
    return acc
  }, {})

  const rows = input.split('\n')
  const filtered = rows.map((row) => {
    const commentIdx = [...row].findIndex((char) => hashMap[char])
    const commented = commentIdx === -1 ? row : row.slice(0, commentIdx)

    return commented.trim()
  })

  return filtered.filter(Boolean).join('\n')
}
