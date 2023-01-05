// https://www.codewars.com/kata/56af1a20509ce5b9b000001e

function travel(r, zipcode) {
  const addresses = r
    .split(',')
    .map((raw) => {
      const match = raw.match(/(?<houseNumber>\d+) (?<street>.+) (?<zipcode>[A-Z]{2,} \d+)/)

      if (!match) return null

      return {
        houseNumber: match.groups.houseNumber,
        street: match.groups.street,
        zipcode: match.groups.zipcode,
      }
    })

  const groupedByZipcode = addresses.reduce((groups, address) => {
    if (address) {
      groups[address.zipcode] = [
        ...(groups[address.zipcode] || []),
        address,
      ]
    }

    return groups
  }, {})

  const foundByZipcode = groupedByZipcode[zipcode] || []
  const phrase = {
    streets: foundByZipcode.map(address => address.street).join(','),
    numbers: foundByZipcode.map(address => address.houseNumber).join(','),
  }

  return foundByZipcode.length === 0
    ? `${zipcode}:/`
    : `${zipcode}:` + [phrase.streets, phrase.numbers].join('/')
}