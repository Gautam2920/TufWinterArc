function findRangeXOR(l, r) {
    const xorTill = (n) => {
        if (n % 4 === 0) return n;
        if (n % 4 === 1) return 1;
        if (n % 4 === 2) return n + 1;
        return 0;
    };

    return xorTill(r) ^ xorTill(l - 1);
}