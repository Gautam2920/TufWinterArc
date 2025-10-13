function countFrequencies(nums) {
    const freqMap = new Map();
    for (const num of nums) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }

    const result = [];
    for (const [key, value] of freqMap.entries()) {
        result.push([key, value]);
    }

    return result;
}