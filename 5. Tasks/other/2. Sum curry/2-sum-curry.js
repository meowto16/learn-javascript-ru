const sum = (initialNum) => {
  let result = 0
  
  const wrapper = function(num) {
    if (typeof num === 'undefined') return result

    result += num
    
    return wrapper
  }
  
  return wrapper(initialNum)
}

module.exports = sum
