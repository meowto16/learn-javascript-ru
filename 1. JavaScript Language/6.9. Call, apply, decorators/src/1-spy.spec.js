const spy = require('./1-spy')

global.alert = jest.fn();

describe('spy', () => {
  let work
  
  beforeEach(() => {
    work = function(a, b) {
      alert( a + b ); // произвольная функция или метод
    }
    work = spy(work);
  })
  
  it('work.calls should contain all args', () => {
    work(1, 2)
    work(4, 5)
    
    expect(work.calls).toStrictEqual([[1,2], [4,5]])
  })
})
