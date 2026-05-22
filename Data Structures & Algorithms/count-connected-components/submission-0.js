class Solution {
    countComponents(n, edges) {
        let graph = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        let visited = new Set();
        let count = 0;

        const dfs = (node) => {
            if (visited.has(node)) return;

            visited.add(node);

            for (let neighbor of graph[node]) {
                dfs(neighbor);
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                dfs(i);
            }
        }

        return count;
    }
}