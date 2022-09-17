// https://www.codewars.com/kata/51b6249c4612257ac0000005/solutions

function solution(input) {
  const dictionary = {
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
  }

  Object.entries(dictionary).forEach(([roman, decimal]) => {
    input = input.replace(new RegExp(roman, 'g'), ` ${decimal} `)
  })

  return input.trim().split(' ').reduce((acc, cur) => acc += Number(cur), 0)
}