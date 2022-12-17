String.prototype.toAlternatingCase = function () {
  return this.replace(/\w/g, (char) => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase())
}