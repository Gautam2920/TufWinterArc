function exist(board, word) {
    const n = board.length, m = board[0].length;

    function dfs(i, j, index) {
        if (index === word.length) return true;
        if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] !== word[index]) return false;

        const temp = board[i][j];
        board[i][j] = '#'; // mark as visited

        const found = dfs(i + 1, j, index + 1) ||
            dfs(i - 1, j, index + 1) ||
            dfs(i, j + 1, index + 1) ||
            dfs(i, j - 1, index + 1);

        board[i][j] = temp; // restore
        return found;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
}
