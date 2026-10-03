class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answer = [];

        for (let i = 0; i < nums.length; i++) {
            if (i - 1 < 0) {
                answer[i] = 1;
            } else {
                answer[i] = answer[i - 1] * nums[i - 1];
            }
        }

        let right = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            answer[i] = answer[i] * right;
            right = right * nums[i];
        }
        return answer;
    }
}
