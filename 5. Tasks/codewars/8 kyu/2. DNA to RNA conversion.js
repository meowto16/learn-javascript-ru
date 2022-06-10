/**
 * https://www.codewars.com/kata/5556282156230d0e5e000089/javascript
 */

function DNAtoRNA(dna) {
    const mapping = {
        'T': 'U',
        'U': 'T',
    }

    return dna.replace(/T|U/g, (char) => mapping[char] || char)
}