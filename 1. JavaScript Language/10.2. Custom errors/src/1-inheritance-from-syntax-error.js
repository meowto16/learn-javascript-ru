/**
 * Наследование от SyntaxError (важность: 5)
 *
 * Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
 * Класс должен поддерживать свойства message, name и stack.
 * Пример использования:
 */

class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'FormatError'
  }
}

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); //
