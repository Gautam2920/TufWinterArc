const n = grid.length;
const res = [];
if (grid[0][0] === 0) return res;

const visited = Array.from({ length: n }, () => Array(n).fill(false));

function dfs(i, j, path) {
    if (i === n - 1 && j === n - 1) {
        res.push(path);
        return;
    }

    visited[i][j] = true;
    const directions = [
        [1, 0, 'D'],
        [0, -1, 'L'],
        [0, 1, 'R'],
        [-1, 0, 'U']
    ];

    for (const [di, dj, move] of directions) {
        const ni = i + di, nj = j + dj;
        if (
            ni >= 0 && nj >= 0 && ni < n && nj < n &&
            !visited[ni][nj] && grid[ni][nj] === 1
        ) {
            dfs(ni, nj, path + move);
        }
    }
    visited[i][j] = false;
}

dfs(0, 0, "");
return res;