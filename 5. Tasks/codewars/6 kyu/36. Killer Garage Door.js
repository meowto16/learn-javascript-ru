function door(events) {
  const TICKS_TO_OPEN = 5

  let state = {
    ticks: 0,
    prevDirection: 'hold',
    direction: 'hold',
  }

  let history = ''

  for (const event of events) {
    switch (event) {
      case 'P': {
        const isOpened = state.ticks === TICKS_TO_OPEN
        const isClosed = state.ticks === 0
        const isHolding = state.direction === 'hold'
        const isOpening = state.direction === 'opening'
        const isClosing = state.direction === 'closing'

        const needToOpen = isClosed
        const needToClose = isOpened
        const needToPause = isOpening || isClosing
        const needToResume = !isClosed && !isOpened && !isOpening && !isClosing

        if (needToResume) {
          if (state.prevDirection === 'closing') {
            state.ticks--;
          }

          if (state.prevDirection === 'opening') {
            state.ticks++;
          }

          state.direction = state.prevDirection
          state.prevDirection = 'hold'
          break
        }

        if (needToPause) {
          state.prevDirection = state.direction
          state.direction = 'hold'
          break
        }

        if (needToOpen) {
          state.direction = 'opening'
          state.ticks++
          break
        }

        if (needToClose) {
          state.direction = 'closing'
          state.ticks--
          break
        }
      }

      case 'O': {
        if (state.direction === 'opening') {
          state.prevDirection = 'opening'
          state.direction = 'closing'
          state.ticks--;

          break
        }

        if (state.direction === 'closing') {
          state.prevDirection = 'closing'
          state.direction = 'opening'
          state.ticks++;

          break
        }
      }

      case '.': {
        if (state.direction === 'opening') {
          state.ticks++;

          if (state.ticks === TICKS_TO_OPEN) {
            state.prevDirection = 'opening'
            state.direction = 'hold'
          }

          break
        }

        if (state.direction === 'closing') {
          state.ticks--;

          if (state.ticks <= 0) {
            state.prevDirection = 'closing'
            state.direction = 'hold'
          }

          break
        }

        if (state.direction === 'hold') {
          break
        }
      }
    }

    history += state.ticks;
  }

  return history;
}