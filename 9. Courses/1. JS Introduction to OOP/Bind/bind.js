export default function bind(obj, fn) {
  return function(...args) {
    const key = Symbol('Key');
    obj[key] = fn;

    const result = obj[key](...args);
    delete obj[key];

    return result;
  }
}