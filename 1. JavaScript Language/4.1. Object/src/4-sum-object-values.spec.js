const getObjectValuesSum = require('./4-sum-object-values')

describe('getObjectValuesSum function', () => {
  it('should sum values in object and return it', () => {
    const mock = {
      John: 100,
      Ann: 160,
      Pete: 130
    }
    const result = getObjectValuesSum(mock)
    const expected = 100 + 160 + 130

    expect(result).toBe(expected)
  })

  it('should return 0 if object doesnt have keys', () => {
    const mock = {}
    const result = getObjectValuesSum(mock)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('should ignore non-numeric values', () => {
    const mock = {
      Maxim: 25,
      Johny: 40,
      Alice: 90,

      licence: 'MIT',
      printWorkerAndSalary: function (name) {
        if (!this[name]) return null
        return `${name}: ${this[name]}`
      }
    }
    const result = getObjectValuesSum(mock)
    const expected = 25 + 40 + 90

    expect(result).toBe(expected)
  })
})
