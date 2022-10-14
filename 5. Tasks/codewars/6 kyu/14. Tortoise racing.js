// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
  const s1 = v1 / 60 / 60
  const s2 = v2 / 60 / 60

  const speedDiff = (v2 - v1) / 60 / 60

  const distanceToLead = Math.floor(g / speedDiff)

  const hours = Math.floor(distanceToLead / 3600)
  const minutes = Math.floor((distanceToLead - (hours * 3600)) / 60)
  const seconds = Math.floor(distanceToLead - (hours * 3600) - (minutes * 60))

  const result = [hours, minutes, seconds]

  if (result.some((value) => value < 0)) return null

  return [hours, minutes, seconds]
}