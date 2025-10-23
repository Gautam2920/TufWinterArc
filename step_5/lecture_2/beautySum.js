function beautySum(s) {
    let n = s.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            let index = s.charCodeAt(j) - 97;
            freq[index]++;

            let maxFreq = 0, minFreq = Infinity;

            for (let f of freq) {
                if (f > 0) {
                    maxFreq = Math.max(maxFreq, f);
                    minFreq = Math.min(minFreq, f);
                }
            }

            total += maxFreq - minFreq;
        }
    }

    return total;
}
