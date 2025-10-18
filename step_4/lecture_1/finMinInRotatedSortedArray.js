function findMin(arr) {
    let low = 0, high = arr.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return arr[low];
}
