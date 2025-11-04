function primeFactorization(queries) {
    const res = [];

    for (const num of queries) {
        let n = num;
        const factors = [];

        while (n % 2 === 0) {
            factors.push(2);
            n /= 2;
        }

        for (let i = 3; i * i <= n; i += 2) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }

        if (n > 2) factors.push(n);

        res.push(factors);
    }

    return res;
}
