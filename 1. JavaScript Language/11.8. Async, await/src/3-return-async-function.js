/**
 * Вызовите async–функцию из "обычной"
 *
 * async function wait() {
 *   await new Promise(resolve => setTimeout(resolve, 1000));
 *
 *   return 10;
 * }
 *
 * function f() {
 *   // ...что здесь написать?
 *   // чтобы вызвать wait() и дождаться результата "10" от async–функции
 *   // не забывайте, здесь нельзя использовать "await"
 * }
 */

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(res => alert(res))
}