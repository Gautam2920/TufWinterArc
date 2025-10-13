function mostFrequentElement(nums) {
    const freqMap = new Map();

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let maxFreq = 0;
    let result = Infinity;

    for (const [num, freq] of freqMap.entries()) {
        if (freq > maxFreq || (freq === maxFreq && num < result)) {
            maxFreq = freq;
            result = num;
        }
    }

    return result;
}