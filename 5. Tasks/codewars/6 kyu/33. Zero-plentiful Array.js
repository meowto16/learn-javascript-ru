function zeroPlentiful(arr){
  let groupsCount = 0
  let currentStreak = 0

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    const isZero = number === 0
    const isLast = i === arr.length - 1;

    if (isZero) {
      currentStreak++;
    }

    if (!isZero || isLast) {
      if (currentStreak >= 1 && currentStreak < 4) {
        return 0;
      }

      if (currentStreak >= 4) {
        groupsCount++;
        currentStreak = 0;
      }
    }
  }

  return groupsCount
}