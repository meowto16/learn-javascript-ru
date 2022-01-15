const { printListBackwardsLoop, printListBackwardsRecursive } = require('./5-print-list-backwards')

describe('printList', () => {
  const list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  beforeEach(() => {
    global.alert = jest.fn()
  })
  
  ;[printListBackwardsLoop, printListBackwardsRecursive].forEach(printList => {
    it(`${printList.name} should alert all values backwards`, () => {
      printList(list)
      
      expect(global.alert).toBeCalledWith(4)
      expect(global.alert).toBeCalledWith(3)
      expect(global.alert).toBeCalledWith(2)
      expect(global.alert).toBeCalledWith(1)
      expect(global.alert).toBeCalledTimes(4)
    })
  })
  
  afterEach(() => {
    global.alert.mockClear()
  })
})
