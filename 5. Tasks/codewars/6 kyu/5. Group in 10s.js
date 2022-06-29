/**
 * https://www.codewars.com/kata/5694d22eb15d78fe8d00003a/javascript
 */

const last = (arr) => (arr || []).slice(-1)[0] || null

function groupIn10s(...numbers) {

    let grouped = Array.from({ length: 11 }).map(() => [])

    for (let number of numbers) {
        const between = (function (number, from, to) {
            return number >= from && number <= to
        }).bind(null, number)

        for (let i = 0; i < grouped.length; i++) {
            const group = grouped[i]
            const from = i * 10
            const to = i * 10 + 9

            if (between(from, to)) {
                group.push(number)
                break
            }
        }
    }

    grouped = grouped.map((group) => group.length
        ? group.sort((a, b) => a - b)
        : undefined
    )

    while (!last(grouped) || !last(grouped).length) {
        grouped.pop()

        if (grouped.length === 0) break
    }

    return grouped
}