// https://www.codewars.com/kata/53d32bea2f2a21f666000256

function largest(n,xs){
  if (n <= 0) return []
  return xs.sort((a, b) => a - b).slice(-n)
}