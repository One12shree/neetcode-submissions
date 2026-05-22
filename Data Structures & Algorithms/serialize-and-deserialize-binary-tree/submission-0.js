class Codec {
    serialize(root) {
        let result = [];

        const dfs = (node) => {
            if (!node) {
                result.push("null");
                return;
            }

            result.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);
        return result.join(",");
    }

    deserialize(data) {
        let values = data.split(",");
        let index = 0;

        const dfs = () => {
            if (values[index] === "null") {
                index++;
                return null;
            }

            let node = new TreeNode(parseInt(values[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        };

        return dfs();
    }
}