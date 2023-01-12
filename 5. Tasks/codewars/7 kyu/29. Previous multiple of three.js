// https://www.codewars.com/kata/61123a6f2446320021db987d

const prevMultOfThree = n => {
  do {
    const result = n / 3

    if (Number.isInteger(result)) {
      return n
    }

    n = Math.floor(n / 10)
  } while (n >= 3)

  return null
}