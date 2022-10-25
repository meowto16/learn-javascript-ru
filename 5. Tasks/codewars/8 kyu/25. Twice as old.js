// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const diff = dadYearsOld - sonYearsOld
  return Math.abs(sonYearsOld - diff)
}