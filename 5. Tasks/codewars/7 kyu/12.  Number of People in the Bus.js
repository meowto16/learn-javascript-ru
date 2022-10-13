// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
  let people = 0;
  
  for (const [gotOn = 0, gotOff = 0] of busStops) {
    people += gotOn - gotOff;
  }
  
  return people
}
