function countSubsequenceWithTargetSum(nums, k) {
    let count = { val: 0 };
    dfs(0, nums, 0, k, count);
    return count.val;

    function dfs(index, nums, sum, k, count) {
        if (index === nums.length) {
            if (sum === k) count.val++;
            return;
        }

        dfs(index + 1, nums, sum + nums[index], k, count);
        dfs(index + 1, nums, sum, k, count);
    }
}
