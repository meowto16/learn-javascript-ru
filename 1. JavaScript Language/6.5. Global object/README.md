# Глобальный объект

- В браузере это `window`, в Node.JS `global`. 
  Глобальный объект имеет универсальное имя – `globalThis`, появился недавно. 
- Переменные объявленные через `var` становятся глобальными, а через `let/const` - нет.
- Для того, чтобы код был проще и в будущем его легче было поддерживать, следует обращаться к свойствам 
  глобального объекта напрямую, как `window.x`

