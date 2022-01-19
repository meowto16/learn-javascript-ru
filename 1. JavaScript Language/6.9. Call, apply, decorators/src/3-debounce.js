/**
 * Декоратор debounce (важность: 5)
 *
 * Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в
 * ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует,
 * что все остальные вызовы будут игнорироваться в течение ms.
 * Например:
 */

function debounce(func, ms) {
  let isCoolDown = false
  
  return function(...args) {
    if (isCoolDown) return
    
    func.apply(this, args)
    isCoolDown = true
    setTimeout(() => isCoolDown = false, ms)
  }
}
