const sum = require('./2-sum-curry')

describe('sum-curry', () => {
  it('sum(1)() should be 1', () => {
    expect(sum(1)()).toBe(1)
  })

  it('sum(1)(2)() should be 3', () => {
    expect(sum(1)(2)()).toBe(3)
  })

  it('sum(1)(2)(-1)() should be 2', () => {
    expect(sum(1)(2)(-1)()).toBe(2)
  })
})
