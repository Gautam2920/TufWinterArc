function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i].sort((a, b) => a - b);
        }

        map.set(nums[i], i);
    }

    return [];
}