const factorial = require('./2-factorial')

describe('factorial', () => {
  const cases = [
    { input: 1, output: 1 },
    { input: 2, output: 2 },
    { input: 3, output: 6 },
    { input: 4, output: 24 },
    { input: 5, output: 120 },
  ]
  
  cases.forEach(({ input, output }) => {
    it(`factorial(${input}) should be ${output}`, () => {
      expect(factorial(input)).toBe(output)
    })
  })
})
