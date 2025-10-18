function countOccurrences(arr, target) {
    function findFirst(arr, target) {
        let low = 0, high = arr.length - 1, first = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                first = mid;
                high = mid - 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return first;
    }

    function findLast(arr, target) {
        let low = 0, high = arr.length - 1, last = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                last = mid;
                low = mid + 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return last;
    }

    const first = findFirst(arr, target);
    if (first === -1) return 0;
    const last = findLast(arr, target);

    return last - first + 1;
}
