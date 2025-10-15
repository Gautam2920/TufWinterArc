function rotateArray(nums, k) {
    const n = nums.length;
    if (n === 0) return;

    k = k % n;

    const rotated = nums.slice(k).concat(nums.slice(0, k));

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}