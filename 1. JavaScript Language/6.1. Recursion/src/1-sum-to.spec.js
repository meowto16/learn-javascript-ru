const { sumToArithmetic, sumToLoop, sumToRecursive } = require('./1-sum-to')

describe('sum to functions', () => {
  const cases = [
    { input: 1, output: 1 },
    { input: 2, output: 3 },
    { input: 3, output: 6 },
    { input: 4, output: 10 },
    { input: 5, output: 15 },
    { input: 100, output: 5050 },
  ];
  
  [sumToLoop, sumToRecursive, sumToArithmetic].forEach(sumTo => {
    describe(sumTo.name, () => {
      cases.forEach(({ input, output }) => {
        it(`${sumTo.name}(${input}) should be ${output}`, () => {
          expect(sumTo(input)).toBe(output)
        })
      })
    })
  })
})
