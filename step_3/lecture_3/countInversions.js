function countInversions(nums) {
    return mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(arr, left, right) {
    if (left >= right) return 0;

    const mid = Math.floor((left + right) / 2);
    let invCount = 0;

    invCount += mergeSort(arr, left, mid);
    invCount += mergeSort(arr, mid + 1, right);
    invCount += merge(arr, left, mid, right);

    return invCount;
}

function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;
    let invCount = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
            invCount += leftArr.length - i;
        }
    }

    while (i < leftArr.length) arr[k++] = leftArr[i++];
    while (j < rightArr.length) arr[k++] = rightArr[j++];

    return invCount;
}