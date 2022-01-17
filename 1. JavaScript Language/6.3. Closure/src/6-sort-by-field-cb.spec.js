const byField = require('./6-sort-by-field-cb')

describe('byField', () => {
  let users
  
  beforeEach(() => {
    users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" }
    ]
  })
  
  it('should sort by strings (ASC)', () => {
    const result = users.sort(byField('name', 'ASC'))
    expect(result).toStrictEqual([
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" }
    ])
  })
  
  it('should sort by strings (DESC)', () => {
    const result = users.sort(byField('name', 'DESC'))
    expect(result).toStrictEqual([
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Ann", age: 19, surname: "Hathaway" }
    ])
  })
  
  it('should sort by numbers (ASC)', () => {
    const result = users.sort(byField('age', 'ASC'))
    expect(result).toStrictEqual([
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" }
    ])
  })
  
  it('should sort by numbers (DESC)', () => {
    const result = users.sort(byField('age', 'DESC'))
    expect(result).toStrictEqual([
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "Pete", age: 18, surname: "Peterson" }
    ])
  })
})
