function aggressiveCows(nums, k) {
    nums.sort((a, b) => a - b);
    let low = 1, high = nums[nums.length - 1] - nums[0], ans = 0;

    const canPlace = (dist) => {
        let count = 1, lastPos = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - lastPos >= dist) {
                count++;
                lastPos = nums[i];
                if (count >= k) return true;
            }
        }
        return false;
    };

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canPlace(mid)) {
            ans = mid;
            low = mid + 1;
        } else high = mid - 1;
    }

    return ans;
}