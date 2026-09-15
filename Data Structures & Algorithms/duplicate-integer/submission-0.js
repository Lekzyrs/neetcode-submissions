class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {  const table = {};
  for (let i = 0; i < nums.length; i++) {
    table[nums[i]] = (table[nums[i]] || 0) + 1;
    if (table[nums[i]] > 1) {
      return true;
    }
  }
  return false;}
}
