/**
 * https://www.codewars.com/kata/5574835e3e404a0bed00001b
 */
function getParticipants(handshakes){
  if (handshakes === 0) return 0
  if (handshakes === 1) return 2

  let participants = 1;

  while (handshakes > 0) {
    participants++
    handshakes -= (participants - 1)
  }

  return participants
}