const isEmpty = require('./2-check-is-empty')

describe('isEmpty function', () => {
  it(`should return true if object doesn't have any keys`, () => {
    const mock = {}
    const result = isEmpty(mock)

    expect(result).toBe(true)
  })

  it(`should return false if object have one key`, () => {
    const mock = { a: 1 }
    const result = isEmpty(mock)

    expect(result).toBe(false)
  })

  it('should return false if object have more than one key', () => {
    const mock = { a: 1, b: {}, c: '' }
    const result = isEmpty(mock)

    expect(result).toBe(false)
  })
})
