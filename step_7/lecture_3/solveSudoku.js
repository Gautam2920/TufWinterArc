function solveSudoku(board) {
    const isValid = (row, col, ch) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === ch) return false;
            if (board[i][col] === ch) return false;
            const subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const subCol = 3 * Math.floor(col / 3) + (i % 3);
            if (board[subRow][subCol] === ch) return false;
        }
        return true;
    };

    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let ch = '1'; ch <= '9'; ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
                        if (isValid(r, c, ch)) {
                            board[r][c] = ch;
                            if (solve()) return true;
                            board[r][c] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
    return board;
}
