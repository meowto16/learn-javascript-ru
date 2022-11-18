// @ts-check

// BEGIN (write your solution here)
export default function makeRational(initialNumer = null, initialDenom = null) {
  return {
    numer: initialNumer,
    denom: initialDenom,
    getNumer() {
      return this.numer;
    },
    setNumer(numer) {
      this.numer = numer;
    },
    getDenom() {
      return this.denom;
    },
    setDenom(denom) {
      this.denom = denom;
    },
    add(rational) {
      // Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
      const a = this.getNumer();
      const b = this.getDenom();
      const c = rational.getNumer();
      const d = rational.getDenom();

      const numer = a * d + b * c;
      const denom = b * d;

      return makeRational(numer, denom);
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`;
    },
  };
}
// END
