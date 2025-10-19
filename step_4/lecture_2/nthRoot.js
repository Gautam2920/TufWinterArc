function NthRoot(n, m) {
    let low = 1, high = m;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = Math.pow(mid, n);
        if (val === m) return mid;
        if (val < m) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}