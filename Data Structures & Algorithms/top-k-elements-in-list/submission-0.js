class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         let map = new Map();

    // frequency count
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];

        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    }

    // we must sort by frequency and take top k
    let arr = [...map.entries()].sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }

    return result;
    }
}
