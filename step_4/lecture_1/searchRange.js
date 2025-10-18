function searchRange(nums, target) {
    function findFirst(nums, target) {
        let low = 0, high = nums.length - 1;
        let first = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] === target) {
                first = mid;
                high = mid - 1;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return first;
    }

    function findLast(nums, target) {
        let low = 0, high = nums.length - 1;
        let last = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] === target) {
                last = mid;
                low = mid + 1;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return last;
    }

    const first = findFirst(nums, target);
    const last = findLast(nums, target);
    return [first, last];
}
