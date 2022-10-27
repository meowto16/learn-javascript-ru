// https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f

function balance(book) {
  const [originalBalanceLine, ...categoriesLines] = book.split('\n').filter(Boolean)

  const REGEX = {
    balance: {
      costs: /[0-9\.]+/
    },
    category: {
      id: /^[0-9]+/,
      name: /[a-zA-Z]+/,
      costs: /(?<=\D)[0-9\.]+/
    }
  }

  const originalBalance = +originalBalanceLine.match(REGEX.balance.costs)
  const categories = categoriesLines.map(line => ({
    id: String(line.match(REGEX.category.id)),
    name: String(line.match(REGEX.category.name)),
    costs: +line.match(REGEX.category.costs),
  }))

  let result = `Original Balance: ${originalBalance.toFixed(2)}\r\n`
  let balance = originalBalance
  let totalExpenses = 0

  for (const category of categories) {
    balance -= category.costs
    totalExpenses += category.costs
    result += `${category.id} ${category.name} ${category.costs.toFixed(2)} Balance ${balance.toFixed(2)}\r\n`
  }

  result += `Total expense  ${totalExpenses.toFixed(2)}\r\n`
  result += `Average expense  ${(totalExpenses / categories.length).toFixed(2)}`

  return result
}