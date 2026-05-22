class Solution {
    invertTree(root) {
        if (!root) return null;

        [root.left, root.right] = [root.right, root.left];

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}