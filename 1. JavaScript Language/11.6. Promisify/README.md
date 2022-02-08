# Промисификация

Это довольно простое преобразование из обычной функции с коллбэком в промис.

```js
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // наш специальный колбэк для f
        if (err) {
          return reject(err);
        } else {
          // делаем resolve для всех results колбэка, если задано manyArgs
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
};
```

По итогу пользоваться потом можно так:

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  
  document.head.append(script);
}

let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
```

> Также существуют модули с более гибкой промисификацией, например, `es6-promisify` или встроенная функция 
> `util.promisify` в Node.js.

