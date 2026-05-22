class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let numss = new Set(nums);
  let longest = 0;

  for (let num of numss) {
    // check if this is the start of a sequence
    if (!numss.has(num - 1)) {
      let length = 1;

      // count consecutive numbers
      while (numss.has(num + length)) {
        length++;
      }

      // update longest sequence
      longest = Math.max(longest, length);
    }
  }

  return longest;
    }
}
