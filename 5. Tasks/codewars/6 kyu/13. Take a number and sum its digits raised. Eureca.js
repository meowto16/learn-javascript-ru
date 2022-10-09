// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(from, to) {
  const eurica = []

  for (let num = from; num <= to; num++) {
    const digits = String(num).split('')
    const powed = digits.map((num, i) => num ** (i + 1))
    const sum = powed.reduce((acc, cur) => acc + cur)

    if (sum === num) {
      eurica.push(num)
    }
  }

  return eurica
}
