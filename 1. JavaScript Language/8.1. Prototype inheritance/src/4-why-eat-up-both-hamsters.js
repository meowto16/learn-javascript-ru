/**
 * Почему наедаются оба хомяка? (важность: 5)
 *
 * У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
 *
 * Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 */

let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

// Решение: добавить каждому объекту свое свойство `stomach`
