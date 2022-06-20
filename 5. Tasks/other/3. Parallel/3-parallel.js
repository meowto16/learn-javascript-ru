/**
 * Есть недописаная функция "parallel(funcArray, doneAll)":
 *
 * Нужно её дописать.
 * Что-то вроде аналога promise.all. И не забудьте, что результирующий массив должен сохранять тот порядок, в котором передавались функции.
 */

function parallel(funcArray, doneAll) {
  const unresolved = Symbol('unresolved')
  const funcResults = Array.from({ length: funcArray.length }, () => unresolved)
  
  function done(idx, result) {
    funcResults[idx] = result
    
    if (funcResults.every(res => res !== unresolved)) {
      doneAll(funcResults)
    }
  }
  
  funcArray.forEach((fn, idx) => {
    fn.call(null, done.bind(null, idx))
  })
}

module.exports = parallel
