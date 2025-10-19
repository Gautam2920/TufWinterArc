function kthElement(a, b, k) {
    if (a.length > b.length) return this.kthElement(b, a, k);
    let m = a.length, n = b.length;
    let low = Math.max(0, k - n), high = Math.min(k, m);

    while (low <= high) {
        let cutA = Math.floor((low + high) / 2);
        let cutB = k - cutA;

        let l1 = cutA === 0 ? -Infinity : a[cutA - 1];
        let l2 = cutB === 0 ? -Infinity : b[cutB - 1];
        let r1 = cutA === m ? Infinity : a[cutA];
        let r2 = cutB === n ? Infinity : b[cutB];

        if (l1 <= r2 && l2 <= r1) return Math.max(l1, l2);
        else if (l1 > r2) high = cutA - 1;
        else low = cutA + 1;
    }

    return -1;
}