const isValidBrackets = require('./is-valid-brackets')

describe('isValidBrackets function', () => {
  const groups = ['[]', '{}', '()']
  const check = (expression, expectation) => expect(isValidBrackets(expression, groups)).toBe(expectation)
  
  it('Should return true if empty string provided', () => {
    check('', true)
  })
  
  it('Should throw error if expression is not string', () => {
    expect(() => isValidBrackets(undefined)).toThrow()
  })
  
  describe('Should throw error if groups are not provided', () => {
    it('Should throw error if groups is empty array', () => {
      expect(() => isValidBrackets('([])', [])).toThrow()
    })
    it('Should throw error if groups is not array', () => {
      expect(() => isValidBrackets('([])', undefined)).toThrow()
      expect(() => isValidBrackets('([])', {})).toThrow()
      expect(() => isValidBrackets('([])', '')).toThrow()
      expect(() => isValidBrackets('([])', 0)).toThrow()
      expect(() => isValidBrackets('([])', NaN)).toThrow()
      expect(() => isValidBrackets('([])', null)).toThrow()
    })
    it('Should throw error if groups is not array of tuple-strings', () => {
      expect(() => isValidBrackets('([])', ['{{}', '[]'])).toThrow()
      expect(() => isValidBrackets('([])', ['[', '()'])).toThrow()
    })
  })
  
  describe('Should throw error if non-string provided', () => {
    const expressions = [undefined, null, {}, [], 0, 1, NaN, Infinity, -Infinity, Symbol('123')]
    
    expressions.forEach(expression => {
      it(`Should throw error for expression ${JSON.stringify(expression)}`, () => {
        expect(() => isValidBrackets(expression, groups)).toThrow()
      })
    })
  })
  
  describe('Should throw error if met unknown char in expression', () => {
    const expressions = ['([{},[]])', '(ab)']
    
    expressions.forEach(expression => {
      it(`Should throw error for expression ${expression}`, () => {
        expect(() => isValidBrackets(expression, groups)).toThrow()
      })
    })
  })
  
  describe('Should return true with valid one-level brackets', () => {
    describe('Check depth level 1', () => {
      const expressions = ['[]{}()', '()[]{}', '{}()[]']
      
      expressions.forEach(expression => {
        it(`Should return true for expression ${expression}`, () => {
          check(expression, true)
        })
      })
    })
    
    describe('Check depth level 2', () => {
      const expressions = [
        '[{}()]',
        '{[]()}',
        '([]{})'
      ]
      
      expressions.forEach(expression => {
        it(`Should return true for expression ${expression}`, () => {
          check(expression, true)
        })
      })
    })
    
    describe('Check depth level 3', () => {
      const expressions = [
        '((([][])({}[])([{}])))'
      ]
      
      expressions.forEach(expression => {
        it(`Should return true for expression ${expression}`, () => {
          check(expression, true)
        })
      })
    })
  })
  
  describe('Mocked cases', () => {
    const expressions = [
      ['([{[]({})}]([][({}{})]))', true],
      ['(((([[[]]])))[{}][])', true],
      ['{{[)}}', false],
      ['[[[((())]]]]', false],
      ['[]]', false],
      [')', false],
      ['[[', false],
      ['}{', false],
      [')(', false],
      ['][', false]
    ]
    
    expressions.forEach(([expression, expected]) => {
      it(`Should return ${expected} for expression ${expression}`, () => {
        check(expression, expected)
      })
    })
  })
  
  describe('Random cases', () => {
    const RANDOM_CASES_COUNT = 100

    for (let i = 0; i < RANDOM_CASES_COUNT; i++) {
      const expression = createRandomBracketsExpression(groups)
      
      it(`Should return true for expression ${expression}`, () => {
        check(expression, true)
      })
    }
  
    function createRandomBracketsExpression (groups) {
      const MAX_DEPTH = 10
    
      const depth = Math.ceil(Math.random() * MAX_DEPTH)
      const expressionStart = []
      const expressionEnd = []
    
      for (let i = 0; i < depth; i++) {
        const randomGroupIndex = Math.floor(Math.random() * groups.length)
        const [openBracket, closingBracket] = groups[randomGroupIndex]

        expressionStart.push(openBracket)
        expressionEnd.unshift(closingBracket)
      }
    
      return expressionStart.join('') + expressionEnd.join('')
    }
  })
})
