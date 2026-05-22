class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        

let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Step 2: Two-pointer check
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


}

    

