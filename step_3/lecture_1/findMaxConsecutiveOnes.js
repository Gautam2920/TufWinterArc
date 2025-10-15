function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let count = 0;

    for (let num of nums) {
        if (num === 1) {
            count++;
            if (count > maxCount) maxCount = count;
        } else {
            count = 0;
        }
    }

    return maxCount;
}