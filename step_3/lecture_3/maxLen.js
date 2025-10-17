function maxLen(arr) {
    const prefixIndex = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            maxLen = i + 1; // subarray from 0 to i
        } else if (prefixIndex.has(sum)) {
            maxLen = Math.max(maxLen, i - prefixIndex.get(sum));
        } else {
            prefixIndex.set(sum, i); // store first occurrence
        }
    }

    return maxLen;
}