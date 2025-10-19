function paint(A, B, C) {
         const MOD = 10000003;
        let low = Math.max(...C), high = C.reduce((a, b) => a + b, 0), ans = high;

        const canPaint = (maxLength) => {
            let painters = 1, current = 0;
            for (let len of C) {
                if (current + len > maxLength) {
                    painters++;
                    current = 0;
                }
                current += len;
            }
            return painters <= A;
        };

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (canPaint(mid)) {
                ans = mid;
                high = mid - 1;
            } else low = mid + 1;
        }

        return (ans * B) % MOD;
    }