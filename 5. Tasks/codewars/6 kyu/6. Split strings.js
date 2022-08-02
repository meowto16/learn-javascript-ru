/**
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
 */

function solution(str){
  const CHUNK_LENGTH = 2
  const result = []

  for (let i = 0; i < str.length; i += CHUNK_LENGTH) {
    const chunk = str
      .split('')
      .slice(i, i + CHUNK_LENGTH)
      .join('')
      .padEnd(CHUNK_LENGTH, '_')

    result.push(chunk)
  }

  return result
}