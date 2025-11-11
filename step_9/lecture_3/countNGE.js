function count_NGE(arr, indices) {
    const n = arr.length;
    const result = [];

    for (let idx of indices) {
        let count = 0;
        for (let j = idx + 1; j < n; j++) {
            if (arr[j] > arr[idx]) count++;
        }
        result.push(count);
    }

    return result;
}