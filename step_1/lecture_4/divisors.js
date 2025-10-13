function divisors(n) {
    n = Math.abs(n);
    const result = new Set();

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            result.add(i);
            result.add(n / i);
        }
    }
    return Array.from(result).sort((a, b) => a - b);
}
