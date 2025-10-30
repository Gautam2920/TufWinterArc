function subsetSums(nums) {
    const res = [];
    dfs(0, 0, nums, res);
    return res;
}

function dfs(index, currSum, nums, res) {
    if (index === nums.length) {
        res.push(currSum);
        return;
    }

    dfs(index + 1, currSum + nums[index], nums, res);
    dfs(index + 1, currSum, nums, res);
}
