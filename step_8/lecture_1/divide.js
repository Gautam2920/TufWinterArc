function divide(dividend, divisor) {
    if (divisor === 0) return 2 ** 31 - 1;
    if (dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;

    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b, multiple = 1;
        while (a >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        result += multiple;
    }

    return sign * result;
}
