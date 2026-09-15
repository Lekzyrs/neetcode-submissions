class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
  const firstTable = {};
  for (const symbol of s) {
    firstTable[symbol] = (firstTable[symbol] || 0) + 1;
  }
  for (const symbol of t) {
    if (!firstTable[symbol]) return false;
    firstTable[symbol] -= 1;
    if (firstTable[symbol] === 0) {
      delete firstTable[symbol];
    }
  }
  return true;
    }
}
