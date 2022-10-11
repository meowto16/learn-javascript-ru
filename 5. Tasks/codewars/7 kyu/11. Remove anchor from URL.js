// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url){
  const anchorIdx = url.indexOf('#')

  return anchorIdx === -1 ? url : url.slice(0, anchorIdx)
}