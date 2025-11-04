function countPrimesInRanges(queries) {
    let maxLimit = 0;
    for (const [l, r] of queries) maxLimit = Math.max(maxLimit, r);

    const sieve = buildSieve(maxLimit);
    const prefix = new Array(maxLimit + 1).fill(0);

    for (let i = 1; i <= maxLimit; i++)
        prefix[i] = prefix[i - 1] + (sieve[i] ? 1 : 0);

    const res = [];
    for (const [l, r] of queries)
        res.push(prefix[r] - prefix[l - 1]);

    return res;
}

function buildSieve(n) {
    const isPrime = new Uint8Array(n + 1).fill(1);
    isPrime[0] = isPrime[1] = 0;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i)
                isPrime[j] = 0;
        }
    }
    return isPrime;
}
