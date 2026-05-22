class Solution {
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;

        let pacific = new Set();
        let atlantic = new Set();

        const dfs = (r, c, visited, prevHeight) => {
            let key = `${r},${c}`;

            if (
                r < 0 || c < 0 ||
                r >= rows || c >= cols ||
                visited.has(key) ||
                heights[r][c] < prevHeight
            ) {
                return;
            }

            visited.add(key);

            dfs(r + 1, c, visited, heights[r][c]);
            dfs(r - 1, c, visited, heights[r][c]);
            dfs(r, c + 1, visited, heights[r][c]);
            dfs(r, c - 1, visited, heights[r][c]);
        };

        // Pacific
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific, heights[0][c]);
            dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific, heights[r][0]);
            dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
        }

        let result = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let key = `${r},${c}`;
                if (pacific.has(key) && atlantic.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}