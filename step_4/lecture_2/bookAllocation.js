function findPages(nums, m) {
    if (nums.length < m) return -1;
    let low = Math.max(...nums), high = nums.reduce((a, b) => a + b, 0), ans = high;

    const canAllocate = (maxPages) => {
        let students = 1, currentSum = 0;
        for (let pages of nums) {
            if (currentSum + pages > maxPages) {
                students++;
                currentSum = 0;
            }
            currentSum += pages;
        }
        return students <= m;
    };

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canAllocate(mid)) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }

    return ans;
}