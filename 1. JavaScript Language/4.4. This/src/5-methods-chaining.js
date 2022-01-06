/**
 * Цепь вызовов (важность: 2)
 *
 * Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
 */

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем
// выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// Измените код методов up , down и showStep таким образом, чтобы их вызов можно
// было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1

// Решение:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this
  }
};
