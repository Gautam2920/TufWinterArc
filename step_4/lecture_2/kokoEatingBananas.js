function minimumRateToEatBananas(nums, h) {
    let low = 1, high = Math.max(...nums), ans = high;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let hours = 0;
        for (let bananas of nums) hours += Math.ceil(bananas / mid);
        if (hours <= h) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return ans;
}