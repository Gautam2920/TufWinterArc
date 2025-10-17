function findMissingRepeatingNumbers(nums) {
    const n = nums.length;
    const seen = new Set();
    let repeat = -1;

    for (let num of nums) {
        if (seen.has(num)) repeat = num;
        seen.add(num);
    }

    let missing = -1;
    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }
    }

    return [repeat, missing];
}