function largestSubarraySumMinimized(a, k) {
    let low = Math.max(...a), high = a.reduce((acc, val) => acc + val, 0), ans = high;

    const canSplit = (maxSum) => {
        let count = 1, currentSum = 0;
        for (let num of a) {
            if (currentSum + num > maxSum) {
                count++;
                currentSum = 0;
            }
            currentSum += num;
        }
        return count <= k;
    };

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canSplit(mid)) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }

    return ans;
}