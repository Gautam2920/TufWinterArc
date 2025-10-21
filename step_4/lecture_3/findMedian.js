function findMedian(matrix) {
    const r = matrix.length;
    const c = matrix[0].length;

    let low = matrix[0][0];
    let high = matrix[r - 1][c - 1];

    for (let i = 0; i < r; i++) {
        low = Math.min(low, matrix[i][0]);
        high = Math.max(high, matrix[i][c - 1]);
    }

    const desired = Math.floor((r * c + 1) / 2);

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        let count = 0;

        for (let i = 0; i < r; i++) {
            count += this.upperBound(matrix[i], mid);
        }

        if (count < desired) low = mid + 1;
        else high = mid;
    }

    return low;
}

function upperBound(row, target) {
    let low = 0,
        high = row.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (row[mid] <= target) low = mid + 1;
        else high = mid;
    }
    return low;
}