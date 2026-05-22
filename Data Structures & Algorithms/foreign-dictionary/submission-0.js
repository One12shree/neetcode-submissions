class Solution {
    foreignDictionary(words) {
        let graph = new Map();

        for (let word of words) {
            for (let ch of word) {
                if (!graph.has(ch)) {
                    graph.set(ch, new Set());
                }
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            let w1 = words[i];
            let w2 = words[i + 1];

            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }

            let minLen = Math.min(w1.length, w2.length);

            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    graph.get(w1[j]).add(w2[j]);
                    break;
                }
            }
        }

        let state = new Map();
        let result = [];

        const dfs = (ch) => {
            if (state.get(ch) === 1) return false;
            if (state.get(ch) === 2) return true;

            state.set(ch, 1);

            for (let neighbor of graph.get(ch)) {
                if (!dfs(neighbor)) return false;
            }

            state.set(ch, 2);
            result.push(ch);

            return true;
        };

        for (let ch of graph.keys()) {
            if (!dfs(ch)) return "";
        }

        return result.reverse().join("");
    }
}