class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let numbers = {};
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            numbers[nums[i]] = (numbers[nums[i]] || 0) + 1;
        }
        return Object.keys(numbers).reduce((a,b) => numbers[a] > numbers[b] ? a : b)
    }
}
