class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

class Solution {
    findWords(board, words) {
        let root = new TrieNode();

        // build trie
        for (let word of words) {
            let node = root;
            for (let ch of word) {
                if (!node.children[ch]) {
                    node.children[ch] = new TrieNode();
                }
                node = node.children[ch];
            }
            node.word = word;
        }

        let rows = board.length;
        let cols = board[0].length;
        let result = [];

        const dfs = (r, c, node) => {
            if (
                r < 0 || c < 0 ||
                r >= rows || c >= cols
            ) return;

            let ch = board[r][c];

            if (ch === "#" || !node.children[ch]) return;

            node = node.children[ch];

            if (node.word) {
                result.push(node.word);
                node.word = null; // avoid duplicates
            }

            board[r][c] = "#";

            dfs(r + 1, c, node);
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            board[r][c] = ch;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }

        return result;
    }
}