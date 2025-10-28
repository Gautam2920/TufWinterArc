function countGoodNumbers(n) {
    const MOD = 1000000007n;

    const modPow = (a, b) => {
        let res = 1n;
        while (b > 0n) {
            if (b % 2n === 1n) res = (res * a) % MOD;
            a = (a * a) % MOD;
            b /= 2n;
        }
        return res;
    };

    n = BigInt(n);
    const evenCount = (n + 1n) / 2n;
    const oddCount = n / 2n;

    return Number((modPow(5n, evenCount) * modPow(4n, oddCount)) % MOD);
}