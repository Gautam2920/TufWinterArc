function combinationSum3(k, n) {
    const res = [];
    backtrack(1, k, n, [], res);
    return res;
}

function backtrack(start, k, target, curr, res) {
    if (k === 0 && target === 0) {
        res.push([...curr]);
        return;
    }
    if (k === 0 || target < 0) return;

    for (let i = start; i <= 9; i++) {
        curr.push(i);
        backtrack(i + 1, k - 1, target - i, curr, res);
        curr.pop();
    }
}
