// https://www.codewars.com/kata/57d814e4950d8489720008db

function index(array, n){
  const element = array[n]

  if (element === undefined) {
    return -1;
  }

  return element ** n;
}