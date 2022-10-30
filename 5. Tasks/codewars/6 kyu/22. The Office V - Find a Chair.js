// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b

function meeting(rooms, needChairs){
  if (!needChairs) return 'Game On'

  const result = []

  for (const [occupants, chairsInRoom] of rooms) {
    if (needChairs === 0) return result

    const availableChairs = Math.max(chairsInRoom - occupants.length, 0)
    const willGetChairs = needChairs - availableChairs >= 0
      ? availableChairs
      : needChairs

    needChairs -= willGetChairs;
    result.push(willGetChairs);
  }

  if (needChairs >= 1) return 'Not enough!'

  return result
}