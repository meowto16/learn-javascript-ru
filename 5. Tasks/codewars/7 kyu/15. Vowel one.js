// https://www.codewars.com/kata/580751a40b5a777a200000a1

function vowelOne(s){
  const checkVowel = char => {
    return Boolean({ a: true, e: true, i: true, o: true, u: true }[char.toLowerCase()])
  }

  return s.split('').map(char => checkVowel(char) ? '1' : '0').join('')
}