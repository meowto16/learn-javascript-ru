function part(phrases){
  const related = new Set([
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ])

  const termsFoundCount = phrases.reduce((found, phrase) => {
    if (related.has(phrase)) {
      return found + 1;
    }

    return found
  }, 0)

  return termsFoundCount
    ? `Mine's a Pint` + '!'.repeat(termsFoundCount)
    : `Lynn, I've pierced my foot on a spike!!`
}