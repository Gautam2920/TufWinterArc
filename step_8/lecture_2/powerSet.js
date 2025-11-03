function powerSet(nums) {
    const n = nums.length;
    const total = 1 << n;
    const res = [];

    for (let mask = 0; mask < total; mask++) {
        const subset = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) subset.push(nums[i]);
        }
        res.push(subset);
    }

    return res;
}