// https://www.codewars.com/kata/57dd3a06eb0537b899000a64

var comparator = function(a,b) {
  const correctOrders = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a']
  const idx1 = correctOrders.findIndex((substr) => a.startsWith(substr))
  const idx2 = correctOrders.findIndex((substr) => b.startsWith(substr))

  return idx1 - idx2;
}