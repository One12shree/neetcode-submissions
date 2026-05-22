class Solution {
    buildTree(preorder, inorder) {
        let map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let preIndex = 0;

        const build = (left, right) => {
            if (left > right) return null;

            let rootVal = preorder[preIndex++];
            let root = new TreeNode(rootVal);

            let mid = map.get(rootVal);

            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}