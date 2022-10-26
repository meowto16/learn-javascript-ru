// https://www.codewars.com/kata/5ace2d9f307eb29430000092

function modifyMultiply (str,loc,num) {
  const word = str.split(' ')[loc]
  return Array.from({ length: num }, () => word).join('-')
}
