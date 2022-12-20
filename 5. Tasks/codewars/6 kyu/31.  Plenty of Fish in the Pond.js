// https://www.codewars.com/kata/5904be220881cb68be00007d

function fish(shoal){
  const AMOUNT_STEP = 4
  
  const fishes = shoal.split('').sort((a, b) => a - b)
  
  function getNewSize(score) {
    let size = 1;
    let amountExtra = AMOUNT_STEP;
    
    while (score - amountExtra >= 0) {
      score -= amountExtra;
      size++;
      amountExtra += AMOUNT_STEP;
    }
    
    return size;
  }
  
  let size = 1;
  let score = 0;

  for (let i = 0; i < fishes.length; i++) {
    const fishToEatSize = Number(fishes[i])
    
    if (size < fishToEatSize) {
      return size;
    }
    
    score += fishToEatSize;
    size = getNewSize(score);
  }

  return size;
}
