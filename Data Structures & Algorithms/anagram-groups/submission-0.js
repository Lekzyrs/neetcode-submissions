class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const table = {};
        for (let i = 0; i < strs.length; i++) {
            let sortEl = strs[i].split("").sort().join("");
            if (!table[sortEl]) {
                table[sortEl] = [];
            }
            table[sortEl].push(strs[i]);
        }
        return Object.values(table);
    }
}
