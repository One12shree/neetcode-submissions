class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
      let set = new Set(nums);
  nums.length = 0;

  for (let num of set) {
    nums.push(num);
  }

  return nums.length;  
    }
}
