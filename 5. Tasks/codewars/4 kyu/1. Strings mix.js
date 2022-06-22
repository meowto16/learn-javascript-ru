function mix(s1, s2) {
    const [first, second] = [s1, s2].map(str => str.replace(/[^a-z]/g, ''))
    const keyMap = {}

    ;[first, second].forEach((str, i) => {
        const key = i === 0 ? 'first' : 'second'

        for (let char of str) {
            if (!keyMap[char]) {
                keyMap[char] = {
                    first: 0,
                    second: 0,
                }
            }

            keyMap[char][key] += 1
        }
    })

    const mix = Object
        .entries(keyMap)
        .reduce((acc, [char, { first, second }]) => {
            const value = first > second ? first : second
            const prefix = (first === second && '=') || (first > second ? '1' : '2')

            if (value > 1) acc.push({
                char,
                value,
                prefix
            })

            return acc
        }, [])
        .sort((a, b) => {
            if (a.value === b.value) {
                if (a.prefix === b.prefix) {
                    return a.char.localeCompare(b.char)
                }

                if (a.prefix === '1') return -1
                if (b.prefix === '=') return -1

                if (b.prefix === '1') return 1
                if (a.prefix === '=') return 1

                return a.char.localeCompare(b.char)
            }

            return b.value - a.value
        })

    return mix
        .map((info) => {
            return `${info.prefix}:${info.char.repeat(info.value)}`
        })
        .join('/')
}