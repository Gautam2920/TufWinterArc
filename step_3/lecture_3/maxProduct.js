function maxProduct(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(num, maxProd * num);
        minProd = Math.min(num, minProd * num);

        result = Math.max(result, maxProd);
    }

    return result;
}