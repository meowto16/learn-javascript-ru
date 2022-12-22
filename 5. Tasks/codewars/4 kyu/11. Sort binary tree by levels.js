// https://www.codewars.com/kata/52bef5e3588c56132c0003bc
function treeByLevels(rootNode) {
  const list = []

  function sortByLvl(tree, level = 0) {
    if (!tree) {
      return;
    }

    if (!list[level]) {
      list[level] = []
    }

    list[level].push(tree.value)


    if (tree.left) {
      sortByLvl(tree.left, level + 1)
    }

    if (tree.right) {
      sortByLvl(tree.right, level + 1)
    }
  }

  sortByLvl(rootNode)

  return list.flat()
}