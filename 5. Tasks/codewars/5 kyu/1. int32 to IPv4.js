/**
 * https://www.codewars.com/kata/52e88b39ffb6ac53a400022e
 */

function int32ToIp(int32){
  const bytes = (+int32).toString(2).padStart(32, '0');
  const octets = [
    bytes.slice(0, 8),
    bytes.slice(8, 16),
    bytes.slice(16, 24),
    bytes.slice(24, 32)
  ];

  return octets
    .map((binary) => parseInt(binary, 2).toString())
    .join('.')
}