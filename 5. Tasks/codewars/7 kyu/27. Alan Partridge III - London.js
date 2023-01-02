// https://www.codewars.com/kata/580a41b6d6df740d6100030c

function alan(stations){
  stations = new Set(stations)

  const stops = new Set([
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway',
  ])

  for (const stop of stops) {
    if (!stations.has(stop)) {
      return 'No, seriously, run. You will miss it.'
    }
  }

  return 'Smell my cheese you mother!'
}