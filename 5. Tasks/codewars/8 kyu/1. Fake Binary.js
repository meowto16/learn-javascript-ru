/**
 * Fake Binary
 *
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5
 * and above with '1'. Return the resulting string.
 *
 * Note: input will never be an empty string
 */

const fakeBin = (x) => {
    return x.split('').map(char => +char < 5 ? '0' : '1').join('')
}