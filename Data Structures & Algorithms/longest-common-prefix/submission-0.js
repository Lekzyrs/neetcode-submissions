class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        /*
        так, можно сделать так
        у нас каждое слово с префиксом начинается с одних и тех же букв
        и получается, что мы проходимся по каждому слову и сравниваем символ с первого
        слова с остальными словами и если символы одинаковые - загружаем в результат, если неодинаковые - возвращаем
        */
        let res = ''
        for (let i = 0; i<strs[0].length; i++) {
            for (const s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return res
                }
            }
                res+=strs[0][i]
        }
        return res
    }
}
