const getMaxSubSum = require('./5-subarray-max-sum')

describe('getMaxSubSum', function () {
  
  const map = [
    { input: [1, 2, 3], output: 6 },
    { input: [-1, 2, 3, -9], output: 5 },
    { input: [-1, 2, 3, -9, 11], output: 11 },
    { input: [-2, -1, 1, 2], output: 3 },
    { input: [100, -9, 2, -3, 5], output: 100 },
    { input: [], output: 0 },
    { input: [-1], output: 0 },
    { input: [-1, -2], output: 0 },
    { input: [2, -8, 5, -1, 2, -3, 2], output: 6 },
    { input: [-5, -4, 2, 5, -2, -2, -2, 7], output: 8 },
    { input: [-5, -4, 2, 5, -2, -2, -2, -2, 4], output: 7 },
    { input: [-5, -4, 1, 3, -2, -2, -2, -2, 12], output: 12 },
  ];
  
  for (let { input, output } of map) {
    it(`maximal subsum of [${input}] equals ${output}`, () => {
      expect(getMaxSubSum(input)).toBe(output)
    })
  }
})
