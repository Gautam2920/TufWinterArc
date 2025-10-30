function combinationSum(candidates, target) {
    const res = [];
    dfs(0, candidates, target, [], res);
    return res;
}

function dfs(index, candidates, target, curr, res) {
    if (target === 0) {
        res.push([...curr]);
        return;
    }
    if (index === candidates.length || target < 0) return;

    curr.push(candidates[index]);
    dfs(index, candidates, target - candidates[index], curr, res);
    curr.pop();
    dfs(index + 1, candidates, target, curr, res);
}
