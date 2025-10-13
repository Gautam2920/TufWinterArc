function countDigit(n) {
    n = Math.abs(n);
    if (n === 0) return 1;
    return n.toString().length;
}