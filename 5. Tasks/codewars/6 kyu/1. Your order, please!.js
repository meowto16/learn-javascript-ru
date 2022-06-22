/**
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript
 */

function order(words){
    if (words === "") return ""

    const onlyNum = (str) => +str.replace(/[^0-9]/g, '')

    return words
        .split(' ')
        .sort((a, b) => {
            return onlyNum(a) - onlyNum(b)
        })
        .join(' ')
}