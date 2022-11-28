// https://www.codewars.com/kata/582c5382f000e535100001a7

function parse(string) {
  const nodes = string.split(' -> ')

  let result = null;

  while (nodes.length) {
    const node = nodes.pop()

    if (node === 'null') continue
    result = new Node(+node, result)
  }

  return result
}