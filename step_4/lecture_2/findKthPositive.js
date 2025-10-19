function findKthPositive(arr, k) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing < k) low = mid + 1;
        else high = mid - 1;
    }
    return low + k;
}
