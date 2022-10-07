/**
 * https://www.codewars.com/kata/539de388a540db7fec000642
 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const isExpired = new Date(expirationDate) - new Date(currentDate) < 0;
  const isInvalid = enteredCode !== correctCode;

  return !isExpired && !isInvalid
}