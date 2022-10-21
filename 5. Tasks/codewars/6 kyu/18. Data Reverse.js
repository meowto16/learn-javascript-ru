// https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
  const SEGMENT_SIZE = 8
  
  const result = []
  
  for (let i = data.length; i >= 0; i -= SEGMENT_SIZE) {
    result.push(...data.slice(i - SEGMENT_SIZE, i))
  }
  
  return result
}
