// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
  const ranges = []

  let rangeIdx = 0;

  for (let i = 0; i < list.length; i++) {
    const current = list[i]
    const next = list[i + 1]

    if (!ranges[rangeIdx]) ranges[rangeIdx] = []
    ranges[rangeIdx].push(current)

    if (next - current > 1) {
      rangeIdx++
    }
  }

  return ranges.map((range) => {
    const start = range[0]
    const end = range.length > 1 ? range[range.length - 1] : null

    if (range.length === 1) return `${start}`
    if (range.length === 2) return `${start},${end}`

    return `${start}-${end}`
  }).join(',')
}