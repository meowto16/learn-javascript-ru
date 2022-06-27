function pingPong(sounds) {
  const PING_MOVE = 'ping'
  const PONG_MOVE = 'pong'
  
  const moves = sounds.split('-')
  
  const score = {
    ping: 0,
    pong: 0,
  }

  let lastShot = null
  let lastBadShot = null
  
  for (let move of moves) {
    if (move !== PING_MOVE && move !== PONG_MOVE && lastShot) {
      lastBadShot = lastShot
      lastShot = null
      
      if (lastBadShot === PING_MOVE) score.pong++
      if (lastBadShot === PONG_MOVE) score.ping++
      
      continue
    }
    
    if (move === PING_MOVE || move === PONG_MOVE) {
      lastShot = move
    }
    
    lastBadShot = null
  }
  
  if (score.ping === score.pong) {
    return lastBadShot === PING_MOVE
      ? PONG_MOVE
      : PING_MOVE
  }
  
  return score.ping >= score.pong
    ? PING_MOVE
    : PONG_MOVE
}
