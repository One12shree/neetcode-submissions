class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs)  {
    let out = "";
    for (let i = 0; i < strs.length; i++) {
        out += strs[i].length + "#" + strs[i];
    }
    return out;
}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {let res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        // find the '#'
        while (str[j] !== "#") {
            j++;
        }

        // convert length manually (no parseInt)
        let length = 0;
        for (let k = i; k < j; k++) {
            length = length * 10 + (str[k].charCodeAt(0) - 48);
        }

        let start = j + 1;
        let end = start + length;

        // extract word manually
        let word = "";
        for (let x = start; x < end; x++) {
            word += str[x];
        }

        res.push(word);
        i = end;
    }

    return res;
}
}
