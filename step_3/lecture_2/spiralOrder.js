function spiralOrder(matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    const result = [];
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) result.push(matrix[top][j]);
        top++;

        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) result.push(matrix[bottom][j]);
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
            left++;
        }
    }

    return result;
}