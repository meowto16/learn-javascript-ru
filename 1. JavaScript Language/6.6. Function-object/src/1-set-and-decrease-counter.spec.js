const makeCounter = require('./1-set-and-decrease-counter')

describe('makeCounter', () => {
  it('counter() should return next value', () => {
    const counter = makeCounter()
    expect(counter()).toBe(1)
    expect(counter()).toBe(2)
    expect(counter()).toBe(3)
  })
  
  it('counter.set(value) should set value and return it', () => {
    const counter = makeCounter()
    expect(counter.set(5)).toBe(5)
    expect(counter.set(10)).toBe(10)
    expect(counter()).toBe(11)
  })
  
  it('counter.decrease() should decrease value and return it', () => {
    const counter = makeCounter()
    expect(counter.decrease()).toBe(-1)
    expect(counter.decrease()).toBe(-2)
  })
})
