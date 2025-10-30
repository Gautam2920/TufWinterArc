function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    backtrack(0, nums, [], res);
    return res;
}

function backtrack(index, nums, curr, res) {
    res.push([...curr]);

    for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) continue;
        curr.push(nums[i]);
        backtrack(i + 1, nums, curr, res);
        curr.pop();
    }
}
