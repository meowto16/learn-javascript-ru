// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i].toLowerCase() !== x[x.length - 1 - i].toLowerCase()) return false
  }

  return true
}