const fold = (str) => str.replaceAll(/(.)\1{1,}/g, (r) => r[0] + r.length)

module.exports = fold