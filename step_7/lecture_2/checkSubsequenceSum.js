function checkSubsequenceSum(nums, k) {
    return dfs(0, nums, 0, k);
}

function dfs(index, nums, sum, k) {
    if (sum === k) return true;
    if (index === nums.length || sum > k) return false;

    if (dfs(index + 1, nums, sum + nums[index], k)) return true;
    return dfs(index + 1, nums, sum, k);
}
