// https://www.codewars.com/kata/525481903700c1a1ff0000e1

function cache(func) {
  const memory = {}

  return (...args) => {
    const key = JSON.stringify(args)

    if (key in memory) {
      return memory[key]
    }

    const result = func.call(this, ...args)
    memory[key] = result

    return result
  }
}