class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;
        
        function getMaxGain(node) {
            if (node === null) return 0;
            
            // Get max paths from subtrees, ignoring them if they are negative
            let leftGain = Math.max(getMaxGain(node.left), 0);
            let rightGain = Math.max(getMaxGain(node.right), 0);
            
            // Calculate sum if this node acts as the highest point of the path
            let currentPathSum = node.val + leftGain + rightGain;
            
            // Update global maximum
            maxSum = Math.max(maxSum, currentPathSum);
            
            // Return single-branch path to parent
            return node.val + Math.max(leftGain, rightGain);
        }
        
        getMaxGain(root);
        return maxSum;
    }
}