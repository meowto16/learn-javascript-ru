// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

// A trailing zero is always produced by prime factors 2 and 5.
// If we can count the number of 5s and 2s, our task is done.

function zeros (n) {
  if (n < 0) return -1

  let count = 0

  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i)
  }

  return count
}