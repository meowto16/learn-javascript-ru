const sum = require('./4-sum-with-closures')

describe('sum', () => {
  it('sum(1)(2) should be 3', () => {
    expect(sum(1)(2)).toBe(3)
  })
  
  
  it('sum(5)(-1) should be 4', () => {
    expect(sum(5)(-1)).toBe(4)
  })
})
