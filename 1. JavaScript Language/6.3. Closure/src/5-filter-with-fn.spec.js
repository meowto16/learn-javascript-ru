const { inBetween, inArray } = require('./5-filter-with-fn')

describe('filter util functions', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  
  describe('inBetween', () => {
    it('inBetween(3,6) should be [3,4,5,6]', () => {
      const result = arr.filter(inBetween(3, 6))
      expect(result).toStrictEqual([3,4,5,6])
    })
  })
  
  describe('inArray', () => {
    it('inArray([1,2,10]) should be [1,2]', () => {
      const result = arr.filter(inArray([1, 2, 10]))
      expect(result).toStrictEqual([1,2])
    })
  })
})
