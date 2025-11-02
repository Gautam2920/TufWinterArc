function checkIthBit(n, i) {
    return (n & (1 << i)) !== 0;
}