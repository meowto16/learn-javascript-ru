class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.range = {
      from: 97,
      to: 122,
    }
  }

  encode(input) {
    const chars = input.split('')
    const shifted = chars.map((char) => {
      if (!this.checkCharInRange(char)) {
        return char
      }

      const code = char.toLowerCase().charCodeAt()
      const shiftedCode = this.shift + code > this.range.to
        ? this.range.from + ((this.shift + code) % this.range.to) - 1
        : this.shift + code

      return String.fromCharCode(shiftedCode).toUpperCase()
    })

    return shifted.join('')
  }

  decode(input) {
    const chars = input.split('')
    const shifted = chars.map((char) => {
      if (!this.checkCharInRange(char)) {
        return char
      }

      const code = char.toLowerCase().charCodeAt()
      const shiftedCode = code - this.shift < this.range.from
        ? this.range.to - (this.range.from % (code - this.shift) - 1)
        : code - this.shift

      return String.fromCharCode(shiftedCode).toUpperCase()
    })

    return shifted.join('')
  }

  checkCharInRange(char) {
    const code = char.toLowerCase().charCodeAt()

    return code >= this.range.from && code <= this.range.to
  }
}