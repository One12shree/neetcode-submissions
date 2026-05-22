class Solution {
    isValidBST(root) {
        return this.check(root, -Infinity, Infinity);
    }

    check(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return (
            this.check(node.left, min, node.val) &&
            this.check(node.right, node.val, max)
        );
    }
}