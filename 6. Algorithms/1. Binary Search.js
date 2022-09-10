function binary_search(arr, item) {
  let from = 0;
  let to = arr.length - 1;

  while (from <= to) {
    const idx = Math.floor((from + to) / 2)
    const candidate = arr[idx]

    if (candidate === item) {
      return idx
    }

    if (candidate > item) {
      to = idx - 1
    } else {
      from = idx + 1
    }
  }

  return null
}