function minimiseMaxDistance(arr, k) {
    let n = arr.length;
    let low = 0, high = arr[n - 1] - arr[0];

    const possible = (d) => {
        let needed = 0;
        for (let i = 1; i < n; i++) {
            needed += Math.floor((arr[i] - arr[i - 1]) / d);
        }
        return needed <= k;
    };

    while (high - low > 1e-6) {
        let mid = (low + high) / 2;
        if (possible(mid)) high = mid;
        else low = mid;
    }

    return high;
}