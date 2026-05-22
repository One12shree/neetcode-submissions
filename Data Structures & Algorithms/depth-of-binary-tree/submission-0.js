class Solution {
    maxDepth(root) {
        if (!root) return 0;

        return 1 + Math.max(
            this.maxDepth(root.left),
            this.maxDepth(root.right)
        );
    }
}