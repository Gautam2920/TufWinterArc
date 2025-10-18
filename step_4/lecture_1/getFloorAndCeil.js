function getFloorAndCeil(nums, x) {
    let n = nums.length;
    let low = 0,
        high = n - 1;
    let floor = -1,
        ceil = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === x) {
            floor = nums[mid];
            ceil = nums[mid];
            break;
        } else if (nums[mid] < x) {
            floor = nums[mid];
            low = mid + 1;
        } else {
            ceil = nums[mid];
            high = mid - 1;
        }
    }

    return [floor, ceil];
}