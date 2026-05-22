class Solution {
    kthSmallest(root, k) {
        let count = 0;
        let answer = null;

        const inorder = (node) => {
            if (!node || answer !== null) return;

            inorder(node.left);

            count++;
            if (count === k) {
                answer = node.val;
                return;
            }

            inorder(node.right);
        };

        inorder(root);
        return answer;
    }
}