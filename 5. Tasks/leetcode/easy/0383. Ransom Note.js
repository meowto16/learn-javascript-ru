/**
 * https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const countByChar = (acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }

  const countCharIn = {
    ransomNote: ransomNote.split('').reduce(countByChar, {}),
    magazine: magazine.split('').reduce(countByChar, {})
  }

  for (const key in countCharIn.ransomNote) {
    const count = {
      ransom: countCharIn.ransomNote[key],
      magazine: countCharIn.magazine[key]
    }

    if ((count.magazine || 0) - count.ransom < 0) {
      return false
    }
  }

  return true
};