function subarraysWithXorK(nums, k) {
    const xorMap = new Map();
    let xor = 0;
    let count = 0;

    for (let num of nums) {
        xor ^= num;

        if (xor === k) count++;

        const target = xor ^ k;
        if (xorMap.has(target)) {
            count += xorMap.get(target);
        }

        xorMap.set(xor, (xorMap.get(xor) || 0) + 1);
    }

    return count;
}