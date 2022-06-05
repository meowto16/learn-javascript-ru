/**
 * Почему не работает return false? (важность: 3)
 *
 * Почему в коде ниже return false не работает?
 */

/**
 * <script>
 *   function handler() {
 *     alert( "..." );
 *     return false;
 *   }
 * </script>
 *
 * <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>
 */

// Решение: надо возвращать значение из handler()
// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>
