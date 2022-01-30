/**
 * Повторный bind (важность: 5)
 *
 * Можем ли мы изменить this дополнительным связыванием?
 *
 * Что выведет этот код?
 */

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();

// Решение: выведет "Вася". Нельзя дважды прибиндить контекст.