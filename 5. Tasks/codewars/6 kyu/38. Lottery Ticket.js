// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win){
  let miniwins = 0

  for (const [characters, characterCodeToWin] of ticket) {
    if (characters.split('').some(char => char.charCodeAt() === characterCodeToWin)) {
      miniwins++
    }
  }

  return miniwins >= win
    ? 'Winner!'
    : 'Loser!'
}