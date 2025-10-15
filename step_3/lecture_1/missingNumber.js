function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
}