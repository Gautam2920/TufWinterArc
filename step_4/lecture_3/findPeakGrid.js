function findPeakGrid(mat) {
    let n = mat.length,
        m = mat[0].length;
    let low = 0,
        high = m - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        let maxRow = 0;
        for (let i = 0; i < n; i++) {
            if (mat[i][mid] > mat[maxRow][mid]) {
                maxRow = i;
            }
        }

        const left = mid - 1 >= 0 ? mat[maxRow][mid - 1] : -1;
        const right = mid + 1 < m ? mat[maxRow][mid + 1] : -1;
        const curr = mat[maxRow][mid];

        if (curr > left && curr > right) {
            return [maxRow, mid];
        } else if (left > curr) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return [-1, -1];
}