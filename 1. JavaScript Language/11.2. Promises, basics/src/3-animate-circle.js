/**
 * Анимация круга с помощью промиса
 *
 * Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом,
 * чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
 * Новое использование:
 */

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);
  
  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  })
  
  return new Promise((resolve) => {
    
    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      resolve(div);
    });
  })
}
