function leaders(nums) {
    const n = nums.length;
    const result = [];
    let maxRight = -Infinity;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > maxRight) {
            result.push(nums[i]);
            maxRight = nums[i];
        }
    }

    result.reverse();
    return result;
}