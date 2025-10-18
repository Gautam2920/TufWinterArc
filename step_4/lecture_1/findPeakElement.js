function findPeakElement(arr) {
    let low = 0,
        high = arr.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[mid + 1]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}