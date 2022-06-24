/**
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86
 */

function queueTime(customers, n) {
    if (customers.length === 0) return 0
    if (customers.length <= n) return Math.max(...customers)

    const stack = [...customers]
    let queue = stack.splice(0, n)

    let totalTime = 0

    while (queue.length) {
        const tickTime = Math.min(...queue)
        totalTime += tickTime

        queue = queue.reduce((acc, time) => {
            const diff = time - tickTime

            if (diff) {
                acc.push(diff)
            }

            return acc
        }, [])

        const lengthDiff = n - queue.length

        if (stack.length) {
            queue.push(...stack.splice(0, lengthDiff))
        }
    }

    return totalTime
}