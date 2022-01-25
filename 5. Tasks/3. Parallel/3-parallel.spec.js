const parallel = require('./3-parallel')

jest.useFakeTimers()

describe('parallel', () => {
  it('should call doneAll with multiple values of functions as argument', () => {
    const a = done => done('result a')
    const b = done => done('result b')
    const c = done => done('result c')
    
    const doneAll = jest.fn(result => result)
    
    expect(doneAll).not.toHaveBeenCalled()

    parallel([a,b,c], doneAll)
    
    expect(doneAll).toHaveBeenCalled()
    expect(doneAll).toHaveBeenLastCalledWith([
      'result a',
      'result b',
      'result c'
    ])
  })
  
  it('should call doneAll only once, after all functions completed', () => {
    const a = done => done('result a')
    const b = done => done('result b')
    const c = done => done('result c')
  
    const doneAll = jest.fn(result => result)
  
    expect(doneAll).not.toHaveBeenCalled()
  
    parallel([a,b,c], doneAll)
  
    expect(doneAll).toHaveBeenCalled()
    expect(doneAll).toHaveBeenCalledTimes(1)
  })
  
  it('should call doneAll with values in order as argument', () => {
    const a = done => done('third')
    const b = done => done('first')
    const c = done => done('second')
  
    const doneAll = jest.fn(result => result)
  
    expect(doneAll).not.toHaveBeenCalled()
  
    parallel([b, c, a], doneAll)
  
    expect(doneAll).toHaveBeenCalled()
    expect(doneAll).toHaveBeenLastCalledWith([
      'first',
      'second',
      'third'
    ])
  })
  
  it('should work with async functions', () => {
    const a = done => setTimeout(() => done('third'), 2000)
    const b = done => setTimeout(() => done('first'), 500)
    const c = done => setTimeout(() => done('second'), 1000)
  
    const doneAll = jest.fn(result => result)
    
    expect(doneAll).not.toHaveBeenCalled()
    parallel([b, c, a], doneAll)
  
    jest.advanceTimersByTime(500)
    expect(doneAll).not.toHaveBeenCalled()
  
    jest.advanceTimersByTime(500)
    expect(doneAll).not.toHaveBeenCalled()
  
    jest.advanceTimersByTime(1000)
    expect(doneAll).toHaveBeenCalled()
    expect(doneAll).toHaveBeenLastCalledWith(['first', 'second', 'third'])
  })
})
