// https://www.codewars.com/kata/55c6126177c9441a570000cc

function orderWeight(string) {
  if (string.trim().length === 0) return ''

  const weights = string.trim().split(/\s{1,}/)
  const participants = weights.map((weight) => {
    return {
      weight: {
        real: Number(weight),
        fake: weight.split('').reduce((acc, strDigit) => acc + Number(strDigit), 0)
      }
    }
  })

  const sorted = {
    byRealWeight: participants.sort((p1, p2) => p1.weight.real - p2.weight.real),
    byFakeWeight: participants.sort((p1, p2) => {
      const byWeight = p1.weight.fake - p2.weight.fake
      const byAlphabet = String(p1.weight.real).localeCompare(String(p2.weight.real))

      return byWeight || byAlphabet
    })
  }

  return sorted.byFakeWeight.map((participant) => participant.weight.real).join(' ')
}