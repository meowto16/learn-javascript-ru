/**
 * Создайте калькулятор (важность: 5)
 *
 * Создайте объект calculator (калькулятор) с тремя методами:
 * read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
 * sum() (суммировать) возвращает сумму сохранённых значений.
 * mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */

const calculator = {
  _firstvalue: null,
  _secondvalue: null,
  read() {
    this._firstvalue = +prompt('Введите первое значение', 0)
    this._secondvalue = +prompt('Введите второе значение', 0)
  },
  sum() {
    return this._firstvalue + this._secondvalue
  },
  mul() {
    return this._firstvalue * this._secondvalue
  }
}

calculator.read()
alert( calculator.sum() );
alert( calculator.mul() );
