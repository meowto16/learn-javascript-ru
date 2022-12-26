// https://www.codewars.com/kata/5c1ae703ba76f438530000a2

function wordMesh(arr){
  const FAILED_TO_MESH_ERROR = 'failed to mesh'

  let result = ''

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    const prev = arr[i - 1]
    const minLength = Math.min(prev.length, current.length)

    let same = ''

    for (let j = minLength; j >= 1; j--) {
      const left = prev.slice(-j)
      const right = current.slice(0, j)

      if (left === right) {
        same = left
        break
      }
    }

    if (!same) {
      return FAILED_TO_MESH_ERROR
    }

    result += same
  }

  return result || FAILED_TO_MESH_ERROR
}