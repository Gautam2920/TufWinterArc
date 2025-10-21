function rowWithMax1s(mat) {
  const n = mat.length;
  const m = mat[0].length;

  let maxRow = -1;
  let j = m - 1;

  for (let i = 0; i < n; i++) {
    while (j >= 0 && mat[i][j] === 1) {
      maxRow = i;
      j--;
    }
  }

  return maxRow;
}