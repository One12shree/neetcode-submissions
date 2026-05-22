class Solution {
    isSame(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;

        return (
            this.isSame(a.left, b.left) &&
            this.isSame(a.right, b.right)
        );
    }

    isSubtree(root, subRoot) {
        if (!root) return false;

        if (this.isSame(root, subRoot)) return true;

        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
}