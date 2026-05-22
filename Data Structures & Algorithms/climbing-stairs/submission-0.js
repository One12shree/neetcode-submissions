class Solution {
    climbStairs(n) {
        if (n <= 2) return n;

        let one = 2;
        let two = 1;

        for (let i = 3; i <= n; i++) {
            let current = one + two;
            two = one;
            one = current;
        }

        return one;
    }
}