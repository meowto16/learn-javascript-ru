/**
 * Напишите "if", аналогичный "switch" (важность: 5)
 *
 * Напишите if..else, соответствующий следующему switch:
 */

const browser = 'Edge'

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

// Решение:
if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

// Или так:
(() => {
  if (browser === 'Edge') return alert("You've got the Edge!")
  if (['Chrome', 'Firefox', 'Safari', 'Opera'].some(browserName => browserName === browser)) {
    return alert('Okay we support these browsers too')
  }

  return alert('We hope that this page looks ok!')
})()
