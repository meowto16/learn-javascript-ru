// https://www.codewars.com/kata/609eee71109f860006c377d1

function lastSurvivor(letters, coords) {
  while (coords.length) {
    const idx = coords.shift()
    letters = letters.slice(0, idx) + letters.slice(idx + 1)
  }
  
  return letters
}
