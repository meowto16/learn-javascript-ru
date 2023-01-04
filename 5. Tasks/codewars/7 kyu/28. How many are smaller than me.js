// https://www.codewars.com/kata/56a1c074f87bc2201200002e

function smaller(nums) {
  return nums.map((num, i) => {
    let count = 0;

    for (let j = i + 1; j < nums.length; j++) {
      if (num > nums[j]) count++
    }

    return count;
  })
}