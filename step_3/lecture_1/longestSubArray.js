function longestSubarray(nums, k) {
    const prefixSumMap = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            maxLength = i + 1;
        }

        if (prefixSumMap.has(sum - k)) {
            maxLength = Math.max(maxLength, i - prefixSumMap.get(sum - k));
        }

        if (!prefixSumMap.has(sum)) {
            prefixSumMap.set(sum, i);
        }
    }

    return maxLength;
}