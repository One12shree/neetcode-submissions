class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;

        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }

        node.isEnd = true;
    }

    search(word) {
        const dfs = (index, node) => {
            if (index === word.length) {
                return node.isEnd;
            }

            let ch = word[index];

            if (ch === ".") {
                for (let child in node.children) {
                    if (dfs(index + 1, node.children[child])) {
                        return true;
                    }
                }
                return false;
            }

            if (!node.children[ch]) return false;

            return dfs(index + 1, node.children[ch]);
        };

        return dfs(0, this.root);
    }
}