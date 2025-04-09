// BEGIN

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}


Money.prototype.getValue = function getValue() {
  return this.value;
};


Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};


Money.prototype.exchangeTo = function exchangeTo(targetCurrency) {
  if (this.currency === targetCurrency) {
    return new Money(this.value, targetCurrency);
  }

  const conversionRates = {
    'usd->eur': 0.7,
    'eur->usd': 1.2,
  };
  const rateKey = `${this.currency}->${targetCurrency}`;
  const rate = conversionRates[rateKey];

  const newValue = this.value * rate;
  return new Money(newValue, targetCurrency);
};


Money.prototype.add = function add(money) {
  const targetCurrency = this.currency;
  const convertedMoney = money.exchangeTo(targetCurrency);
  const sum = this.value + convertedMoney.getValue();
  return new Money(sum, targetCurrency);
};


Money.prototype.format = function format() {
  const currencyCode = this.currency.toUpperCase();
  return this.value.toLocaleString('en-IN', {
    style: 'currency',
    currency: currencyCode,
  });
};

export default Money;
// END
