class Solution {
    cloneGraph(node) {
        if (!node) return null;

        const map = new Map();

        const dfs = (curr) => {
            if (map.has(curr)) {
                return map.get(curr);
            }

            let clone = new Node(curr.val);
            map.set(curr, clone);

            for (let neighbor of curr.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        };

        return dfs(node);
    }
}