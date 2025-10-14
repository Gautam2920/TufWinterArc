function bubbleSort(nums, n = nums.length) {
    if (n === 1) return nums;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        }
    }

    return bubbleSort(nums, n - 1);
}
