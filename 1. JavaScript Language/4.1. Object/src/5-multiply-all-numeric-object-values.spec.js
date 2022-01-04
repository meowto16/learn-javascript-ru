const multiplyNumeric = require('./5-multiply-all-numeric-object-values')

describe('multiplyNumeric function', () => {
  it('should multiply by 2 values', () => {
    const mock = { a: 2, b: 4 }

    multiplyNumeric(mock)

    expect(mock).toStrictEqual({ a: 4, b: 8 })
  })

  it('should ignore/skip non-numeric values', () => {
    const mock = {
      width: 200,
      height: 300,
      title: 'My menu'
    }

    multiplyNumeric(mock)

    expect(mock).toStrictEqual({ width: 400, height: 600, title: 'My menu' })
  })

  it('should not be pure function (should mutate argument)', () => {
    const mock = { a: 2, b: 4 }
    const result = multiplyNumeric(mock)

    expect(mock.a).toBe(4)
    expect(mock.b).toBe(8)
  })

  it('should return undefined (void)', () => {
    const mock = { a: 2 }
    const result = multiplyNumeric(mock)

    expect(result).toBeUndefined()
  })
});
