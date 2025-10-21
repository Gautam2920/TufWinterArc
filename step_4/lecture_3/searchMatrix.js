function searchMatrix(mat, target) {
    const n = mat.length;
    const m = mat[0].length;

    let low = 0, high = n * m - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = mat[Math.floor(mid / m)][mid % m];

        if (midValue === target) return true;
        else if (midValue < target) low = mid + 1;
        else high = mid - 1;
    }

    return false;
}