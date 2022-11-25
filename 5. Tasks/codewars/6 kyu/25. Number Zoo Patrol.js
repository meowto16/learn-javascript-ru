// https://www.codewars.com/kata/5276c18121e20900c0000235

function findNumber(array) {
  const set = new Set(array)
  
  for (let i = 1; i < 999_999; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
