// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s){
  return [
    s.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(''),
    s.split('').map((char, i) => i % 2 !== 0 ? char.toUpperCase() : char.toLowerCase()).join(''),
  ]
};
