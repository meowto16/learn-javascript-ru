function quickSort(arr) {
  if (arr.length <= 1) return arr;
  if (arr.length === 2) return arr[0] <= arr[1]
    ? [arr[0], arr[1]]
    : [arr[1], arr[0]]

  const reference = arr[0]

  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= reference) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), reference, ...quickSort(right)]
}