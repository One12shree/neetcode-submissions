class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

    for (let word of strs) {
        // Sort characters to form the key
        let key = word.split('').sort().join('');

        // Group words by their sorted key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }

    // Convert map values into final array
    return Array.from(map.values());
    }
}
