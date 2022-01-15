const fibonacci = require('./3-fibonacci')

describe('fibonacci', () => {
  const cases = [
    { input: 3, output: 2 },
    { input: 7, output: 13 },
    { input: 77, output: 5527939700884757 },
  ]
  
  cases.forEach(({ input, output }) => {
    it(`fibonacci(${input}) should be ${output}`, () => {
      expect(fibonacci(input)).toBe(output)
    })
  })
})
