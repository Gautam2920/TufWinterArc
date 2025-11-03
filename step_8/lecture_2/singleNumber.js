function singleNumber(nums) {
    let xor = 0;

    for (const num of nums) xor ^= num;

    const rightmostBit = xor & -xor;

    let num1 = 0,
        num2 = 0;
    for (const num of nums) {
        if (num & rightmostBit) num1 ^= num;
        else num2 ^= num;
    }

    return num1 < num2 ? [num1, num2] : [num2, num1];
}