// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

function loop_size(node){
  const memoized = new Map()

  let current = node
  let size = 1;

  while (true) {
    if (memoized.get(current)) {
      break;
    }

    if (!current.getNext() || current.getNext() === current) {
      return size;
    }

    memoized.set(current, true)
    current = current.getNext()
  }

  let loopStart = current;

  while (loopStart !== current.getNext()) {
    size++
    current = current.getNext()
  }

  return size
}