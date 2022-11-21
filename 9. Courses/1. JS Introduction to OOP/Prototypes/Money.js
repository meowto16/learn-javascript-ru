// @ts-check
// BEGIN (write your solution here)
const CURRENCY_USD = 'usd';
const CURRENCY_EURO = 'eur';

const DEFAULT_CURRENCY = CURRENCY_USD;

const createExchangeRate = (fromCurrency, toCurrencies) => ({
  [fromCurrency]: {
    [fromCurrency]: 1,
    ...toCurrencies,
  },
});

const EXCHANGE_RATE = {
  ...createExchangeRate(CURRENCY_USD, { [CURRENCY_EURO]: 0.7 }),
  ...createExchangeRate(CURRENCY_EURO, { [CURRENCY_USD]: 1.2 }),
};

export default class Money {
  #amount = null;

  #currency = DEFAULT_CURRENCY;

  constructor(amount, currency = DEFAULT_CURRENCY) {
    this.#amount = amount;
    this.#currency = currency;
  }

  getValue() {
    return this.#amount;
  }

  getCurrency() {
    return this.#currency;
  }

  exchangeTo(toCurrency) {
    const fromCurrency = this.getCurrency();
    const exchangeRate = EXCHANGE_RATE[fromCurrency][toCurrency];
    const currentAmount = this.getValue();
    const newAmount = currentAmount * exchangeRate;

    return new Money(newAmount, toCurrency);
  }

  add(money) {
    const from = this;
    let to = money;

    const currentCurrency = from.getCurrency();

    if (from.getCurrency() !== to.getCurrency()) {
      to = to.exchangeTo(currentCurrency);
    }

    const newAmount = from.getValue() + to.getValue();

    return new Money(newAmount, currentCurrency);
  }

  format() {
    const currentAmount = this.getValue();

    return currentAmount.toLocaleString(
      undefined,
      {
        style: 'currency',
        currency: this.getCurrency(),
      },
    );
  }
}
// END
