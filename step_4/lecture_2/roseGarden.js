function roseGarden(n, nums, k, m) {
    if (m * k > nums.length) return -1;
    let low = Math.min(...nums), high = Math.max(...nums), ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let bouquets = 0, flowers = 0;
        for (let day of nums) {
            if (day <= mid) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            } else flowers = 0;
        }
        if (bouquets >= m) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return ans;
}