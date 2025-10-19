function shipWithinDays(weights, days) {
    let low = Math.max(...weights), high = weights.reduce((a, b) => a + b, 0), ans = high;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let requiredDays = 1, currentLoad = 0;
        for (let w of weights) {
            if (currentLoad + w > mid) {
                requiredDays++;
                currentLoad = 0;
            }
            currentLoad += w;
        }
        if (requiredDays <= days) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return ans;
}