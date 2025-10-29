function powerSet(nums) {
    const res = [];
    backtrack(0, nums, [], res);
    return res;
}

function backtrack(index, nums, curr, res) {
    if (index === nums.length) {
        res.push([...curr]);
        return;
    }

    backtrack(index + 1, nums, curr, res);
    curr.push(nums[index]);
    backtrack(index + 1, nums, curr, res);
    curr.pop();
}
