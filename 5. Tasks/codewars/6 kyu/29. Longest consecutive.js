https://www.codewars.com/kata/56a5d994ac971f1ac500003e

const longestConsec = (strarr, k) => {
  if(k > strarr.length || k < 0) return ""

  let maxLengthString = '';

  for (let i = 0; i < strarr.length + 1 - k; i++) {
    const combined = strarr.slice(i, i + k).join('')

    if (combined.length > maxLengthString.length) {
      maxLengthString = combined
    }
  }

  return maxLengthString
}