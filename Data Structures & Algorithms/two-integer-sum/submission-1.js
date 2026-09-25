class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const table = new Map();
        const res = []
        for (let i =0; i< nums.length; i++) {
            let complement = target-nums[i]
            if (table.has(complement)) {
                return[i ,table.get(complement)]
            }
            table.set(nums[i], i)
        }
        return []
    }
}
