/**
 * https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript
 */
function disemvowel(str) {
  const vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u', A: 'A', E: 'E', I: 'I', O: 'O', U: 'U' }

  return str
    .split('')
    .reduce((result, char) => result += vowels[char] ? '' : char, '')
}