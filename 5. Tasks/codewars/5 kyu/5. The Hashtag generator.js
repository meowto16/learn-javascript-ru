// https://www.codewars.com/kata/52449b062fb80683ec000024/

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

function generateHashtag (str) {
  str = str.trim().replace(/\s{2,}/g, ' ')

  if (str === "") return false

  const hashtag = str
    .split(' ')
    .map(capitalize)
    .join(``)

  if (hashtag.length >= 140) return false

  return `#${hashtag}`
}