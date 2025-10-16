function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    reverse(nums, i + 1, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
