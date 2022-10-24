// https://www.codewars.com/kata/5270d0d18625160ada0000e4

function score(dice) {
  let score = 0;
  
  const diceMap = dice.reduce((acc, cur) => ({
    ...acc,
    [cur]: (acc[cur] || 0) + 1
  }), {})

  function scoreGreatest() {
    const triples = [[1, 1000], [6, 600], [5, 500], [4, 400], [3, 300], [2,200]];
    const ones = [[1, 100], [5, 50]];
    
    for (const [dice, score] of triples) {
      if (diceMap[dice] >= 3) {
        diceMap[dice] -= 3;
        return score;
      }
    }
    
    for (const [dice, score] of ones) {
      if (diceMap[dice] >= 1) {
        diceMap[dice] -= 1;
        return score;
      }
    }

    return 0;
  }
  
  let lastPoint
  
  do {
    lastPoint = scoreGreatest();
    score += lastPoint;
  } while (lastPoint)
  
  return score;
}
