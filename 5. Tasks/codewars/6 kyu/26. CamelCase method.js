// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase=function(){
  return this
    .split(' ')
    .filter(Boolean)
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join('')
}
