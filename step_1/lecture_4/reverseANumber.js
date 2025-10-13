function reverseANumber(n) {
    const sign = n < 0 ? -1 : 1;
    n = Math.abs(n);
    const reversed = parseInt(n.toString().split('').reverse().join(''), 10);
    return reversed * sign;
}
