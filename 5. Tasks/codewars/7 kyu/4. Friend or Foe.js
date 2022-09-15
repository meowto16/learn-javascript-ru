// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
  const NEED_NAME_LENGTH = 4

  return friends.filter((friendName) => friendName.length === NEED_NAME_LENGTH)
}