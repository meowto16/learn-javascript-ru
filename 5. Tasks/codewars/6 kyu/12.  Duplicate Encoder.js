// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
    const charsCountMap = word.split('').reduce((acc, char) => {
      char = char.toLowerCase()
      acc[char] = (acc[char] || 0) + 1

      return acc
    }, {})
    
    return word
      .split('')
      .map((char) => charsCountMap[char.toLowerCase()] === 1 ? '(' : ')')
      .join('')
}
