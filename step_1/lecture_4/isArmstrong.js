function isArmstrong(n) {
    const numStr = Math.abs(n).toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let char of numStr) {
        const digit = parseInt(char, 10);
        sum += Math.pow(digit, numDigits);
    }

    return sum === n;
}