const sum = require('./2-fn-sum')

describe('sum', () => {
  it('sum(1)(2) should be 3', () => {
    const result = sum(1)(2)
    expect(+result).toBe(3)
  })
  it('sum(1)(2)(3) should be 6', () => {
    const result = sum(1)(2)(3)
    expect(+result).toBe(6)
  })
  it('sum(5)(-1)(2) should be 6', () => {
    const result = sum(5)(-1)(2)
    expect(+result).toBe(6)
  })
  it('sum(6)(-1)(-2)(-3) should be 0', () => {
    const result = sum(6)(-1)(-2)(-3)
    expect(+result).toBe(0)
  })
  it('sum(0)(1)(2)(3)(4)(5) should be 15', () => {
    const result = sum(0)(1)(2)(3)(4)(5)
    expect(+result).toBe(15)
  })
})
