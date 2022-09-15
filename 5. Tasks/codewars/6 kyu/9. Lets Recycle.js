// https://www.codewars.com/kata/5b6db1acb118141f6b000060

function recycle(bin) {
  const groupedByMaterial = {
    paper: [],
    glass: [],
    organic: [],
    plastic: []
  }

  bin.forEach((trash) => {
    groupedByMaterial[trash.material].push(trash.type)

    if (trash.secondMaterial) {
      groupedByMaterial[trash.secondMaterial].push(trash.type)
    }
  })

  return Object.values(groupedByMaterial)
}