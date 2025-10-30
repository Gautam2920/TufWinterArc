function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    dfs(0, candidates, target, [], res);
    return res;
}

function dfs(index, candidates, target, curr, res) {
    if (target === 0) {
        res.push([...curr]);
        return;
    }

    for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) continue;
        if (candidates[i] > target) break;

        curr.push(candidates[i]);
        dfs(i + 1, candidates, target - candidates[i], curr, res);
        curr.pop();
    }
}
