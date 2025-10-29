function generateParenthesis(n) {
    const res = [];
    dfs("", 0, 0, n, res);
    return res;
}

function dfs(curr, open, close, n, res) {
    if (curr.length === 2 * n) {
        res.push(curr);
        return;
    }
    if (open < n) dfs(curr + "(", open + 1, close, n, res);
    if (close < open) dfs(curr + ")", open, close + 1, n, res);
}
