const fold = require('./4-fold')

describe('fold', () => {
  describe('should fold string with numbers for repeated chars', () => {
    const cases = [
      ['aabbcd', 'a2b2cd'],
      ['maxxxpro', 'max3pro']
    ];

    cases.forEach(([input, output]) => {
      it(`Case "${input}" should be ${output}`, () => {
        const result = fold(input);

        expect(result).toBe(output);
      })
    })
  })
})
