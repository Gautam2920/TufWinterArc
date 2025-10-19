function smallestDivisor(nums, limit) {
    let low = 1, high = Math.max(...nums), ans = high;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let sum = 0;
        for (let num of nums) sum += Math.ceil(num / mid);
        if (sum <= limit) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return ans;
}