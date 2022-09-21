// https://www.codewars.com/kata/51b66044bce5799a7f000003

const RomanNumerals = {
  _dictionary: {
    'CM': 900,
    'DCCC': 800,
    'DCC': 700,
    'DC': 600,
    'CD': 400,
    'CCC': 300,
    'CC': 200,
    'XC': 90,
    'LXXX': 80,
    'LXX': 70,
    'LX': 60,
    'XL': 40,
    'XXX': 30,
    'XX': 20,
    'IX': 9,
    'VIII': 8,
    'VII': 7,
    'VI': 6,
    'IV': 4,
    'III': 3,
    'II': 2,
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  },

  toRoman: function(decimal) {
    const dictionary = Object.entries(this._dictionary)
    const sorted = {
      dictionary: {
        byValueDesc: dictionary.sort((a, b) => b[1] - a[1])
      }
    }

    return sorted.dictionary.byValueDesc.reduce((roman, [romanNumeral, decimalValue]) => {

      while ((decimal - decimalValue) >= 0) {
        roman += romanNumeral
        decimal -= decimalValue
      }

      return roman
    }, '')
  },

  fromRoman: function(roman) {
    Object.entries(this._dictionary).forEach(([romanNumeral, decimalValue]) => {
      roman = roman.replace(new RegExp(romanNumeral, 'g'), ` ${decimalValue} `)
    })

    return roman.trim().split(' ').reduce((acc, cur) => acc += Number(cur), 0)
  }
}