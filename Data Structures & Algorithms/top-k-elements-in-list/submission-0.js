class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const table = {};
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            table[nums[i]] = (table[nums[i]] || 0) + 1;
        }
        const sortedTable = new Map(Object.entries(table).sort((a, b) => b[1] - a[1]));
        const keys = Array.from(sortedTable.keys());
        for (let i = 0; i < k; i++) {
            res.push(keys[i]);
        }
        return res.map(Number);
    }
}
