class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let strJoin = "";
        for (let i = 0; i < strs.length; i++) {
            strJoin += strs[i].length + "#" + strs[i];
        }
        return strJoin;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let cur = 0;
        const res = [];
        while (cur < str.length) {
            let j = cur;
            while (str[j] !== "#") {
                j++;
            }
            let len = +str.slice(cur, j);
            res.push(str.slice(j + 1, j + 1 + len));
            cur = j + 1 + len;
        }
        return res;
    }
}
