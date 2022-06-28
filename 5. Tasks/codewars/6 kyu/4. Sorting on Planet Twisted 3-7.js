/**
 * https://www.codewars.com/kata/58068479c27998b11900056e/javascript
 * @param array
 * @returns {*[]}
 */

function sortTwisted37(array) {
    const twist = (digit) => {
        if (digit === '3') return '7'
        if (digit === '7') return '3'

        return digit
    }

    return [...array].sort((a, b) => {
        a = +`${a}`.split('').map(twist).join('')
        b = +`${b}`.split('').map(twist).join('')

        return a - b
    })
}