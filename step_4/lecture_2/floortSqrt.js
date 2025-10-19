function floorSqrt(n) {
    if (n === 0 || n === 1) return n;
    let left = 1, right = n, ans = 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let sq = mid * mid;
        if (sq === n) return mid;
        else if (sq < n) {
            ans = mid;
            left = mid + 1;
        } else right = mid - 1;
    }
    return ans;
}