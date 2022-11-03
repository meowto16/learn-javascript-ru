// https://www.codewars.com/kata/5452113c699b538c18000b01

Guesser.prototype.getNumber = function() {
  const phrase = {
    greater: 'Too low!',
    lower: 'Too high!',
    equal: 'Correct!',
  }

  let number = 500
  let diff = 250
  let lastAnswer = null

  while (lastAnswer !== phrase.equal) {
    lastAnswer = this.guess(number)

    if (lastAnswer === phrase.greater) {
      number += diff
    }

    if (lastAnswer === phrase.lower) {
      number -= diff
    }

    if (lastAnswer === phrase.equal) {
      return number
    }

    diff = Math.round(diff / 2)
  }

  return number
};