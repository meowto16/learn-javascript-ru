// https://www.codewars.com/kata/524c74f855025e2495000262

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const suits = ['♠', '♣', '♥', '♦']

const cardify = (card) => {
  const cards = ranks.reduce((acc, rank, idx) => {
    suits.forEach(suit => acc[rank + suit] = {
      rank,
      suit,
      priority: idx
    })
    return acc
  }, {})

  return cards[card]
}


const groupBy = (groupKey, keys, elements) => keys.reduce((acc, key) => {
  acc.set(key, elements.filter(element => element[groupKey] === key))
  return acc
}, new Map())

const combinify = (cards) => {
  cards = cards.sort((a, b) => b.priority - a.priority)

  const map = {
    bySuit: groupBy('suit', suits, cards),
    byRank: groupBy('rank', [...ranks].reverse(), cards),
  }

  const combinations = [
    {
      type: 'straight-flush',
      getRanks: () => {
        const cards = [...map.bySuit.entries()]
        const [_, handWithFlush] = cards.find(([suit, hand]) => hand.length >= 5) || []

        if (!handWithFlush) {
          return null
        }

        const handWithStraight = (() => {
          let straight = [handWithFlush[0].rank]
          let lastPriority = handWithFlush[0].priority

          for (let i = 1; i < handWithFlush.length; i++) {
            const current = handWithFlush[i];
            const shouldBePriority = lastPriority - 1;

            if (straight.length === 5) break;

            if (current.priority === shouldBePriority) {
              straight.push(current.rank)
              lastPriority--;
            } else {
              straight = [current.rank]
              lastPriority = current.priority
            }
          }

          return straight.length === 5
            ? straight
            : null
        })()

        return handWithStraight || null
      }
    },
    {
      type: 'four-of-a-kind',
      getRanks: () => {
        const cards = [...map.byRank.entries()]
        const candidate = cards.find(([cardRank, hand]) => hand.length === 4)

        if (candidate) {
          const [rank, hand] = candidate
          const [highestCardRank, highestCardHand] = cards.find(
            ([cardRank, hand]) => hand.length >= 1 && rank !== cardRank
          )

          return [rank, highestCardRank]
        }

        return null
      }
    },
    {
      type: 'full house',
      getRanks: () => {
        const cards = [...map.byRank.entries()]
        const candidate = cards.find(([cardRank, hand]) => hand.length === 3)

        if (candidate) {
          const [rank, hand] = candidate
          const [highestCardRank, highestCardHand] = cards.find(
            ([cardRank, hand]) => hand.length >= 2 && rank !== cardRank
          ) || []

          if (rank && highestCardRank) return [rank, highestCardRank]
        }
        return null
      }
    },
    {
      type: 'flush',
      getRanks: () => {
        const cards = [...map.bySuit.entries()]
        const candidate = cards.find(([suit, hand]) => hand.length >= 5)

        if (candidate) {
          const [suit, hand] = candidate

          return hand.map((card) => card.rank).slice(0, 5)
        }

        return null
      }
    },
    {
      type: 'straight',
      getRanks: () => {
        const cards = [...map.byRank.entries()]

        const candidate = (() => {
          let straight = []

          for (let [rank, hand] of cards) {
            if (straight.length === 5) return straight

            if (hand.length === 0) {
              straight = []
              continue
            }

            straight.push(rank)
          }

          return straight.length === 5 ? straight : null
        })()

        return candidate || null
      }
    },
    {
      type: 'three-of-a-kind',
      getRanks: () => {
        const cards = [...map.byRank.entries()]
        const candidate = cards.find(([rank, hand]) => hand.length === 3)

        if (candidate) {
          const [rank, hand] = candidate
          const leftRanks = []

          for (let [cardRank, cardHand] of cards) {
            if (rank === cardRank) continue
            if (leftRanks.length === 2) break
            if (cardHand.length >= 2) {
              leftRanks = [cardRank]
              break
            }
            if (cardHand.length === 1) {
              leftRanks.push(cardRank)
            }
          }

          return [rank, ...leftRanks]
        }

        return null
      }
    },
    {
      type: 'two pair',
      getRanks: () => {
        const cards = [...map.byRank.entries()]
        const firstPair = cards.find(([rank, hand]) => hand.length === 2) || []
        const secondPair = cards.find(([rank, hand]) => hand.length === 2 && rank !== firstPair[0]) || []
        const highest = cards.find(([rank, hand]) => hand.length === 1 && rank !== firstPair[0] && rank !== secondPair[0]) || []

        if (firstPair.length && secondPair.length && highest.length) {
          return [firstPair[0], secondPair[0], highest[0]]
        }

        return null
      }
    },
    {
      type: 'pair',
      getRanks: () => {
        const cards = [...map.byRank.entries()]
        const firstPair = cards.find(([rank, hand]) => hand.length === 2) || []
        const left = cards.filter(([rank, hand]) => hand.length === 1 && rank !== firstPair[0]).slice(0, 3)

        if (firstPair.length && left.length === 3) {
          return [firstPair[0], ...left.map(([rank]) => rank)]
        }

        return null
      }
    },
    {
      type: 'nothing',
      getRanks: () => {
        const cards = [...map.byRank.entries()]
        const left = cards.filter(([rank, hand]) => hand.length === 1).slice(0, 5)

        return left.map(([rank]) => rank)
      },
    }
  ]

  for (let combination of combinations) {
    const ranks = combination.getRanks()

    if (ranks) {
      return {
        type: combination.type,
        ranks
      }
    }
  }
}

const hand = (playerHand, communityHand) => {
  const player = playerHand.map(cardify)
  const table = communityHand.map(cardify)

  return combinify([...player, ...table])
}