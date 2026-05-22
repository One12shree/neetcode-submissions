class Solution {
    isSameTree(p, q) {
        if (!p && !q) return true;

        if (!p || !q) return false;

        if (p.val !== q.val) return false;

        return (
            this.isSameTree(p.left, q.left) &&
            this.isSameTree(p.right, q.right)
        );
    }
}