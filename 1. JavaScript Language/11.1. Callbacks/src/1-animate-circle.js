/**
 * Анимация круга с помощью колбэка
 */

function showCircle(cx, cy, radius, onCompleted) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);
  
  div.addEventListener('transitionend', () => {
    onCompleted(div)
  })
  
  setTimeout(() => {
    div.style.width = radius * 2 + 'px'
    div.style.height = radius * 2 + 'px'
  })
}
