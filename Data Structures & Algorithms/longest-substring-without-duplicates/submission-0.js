class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let ss=new Set()
        let l=0
        let rest=0
        for(let r=0;r<s.length;r++){
            while(ss.has(s[r])){
                ss.delete(s[l])
                l++
            }
            ss.add(s[r])
            rest=Math.max(rest,r-l+1)
        }
            return rest;
    }
}
