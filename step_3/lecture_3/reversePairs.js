function reversePairs(nums) {
    return mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(arr, left, right) {
    if (left >= right) return 0;

    const mid = Math.floor((left + right) / 2);
    let count = 0;

    count += mergeSort(arr, left, mid);
    count += mergeSort(arr, mid + 1, right);
    count += countWhileMerge(arr, left, mid, right);

    merge(arr, left, mid, right);
    return count;
}

function countWhileMerge(arr, left, mid, right) {
    let count = 0;
    let j = mid + 1;

    for (let i = left; i <= mid; i++) {
        while (j <= right && arr[i] > 2 * arr[j]) j++;
        count += j - (mid + 1);
    }

    return count;
}

function merge(arr, left, mid, right) {
    const temp = [];
    let i = left, j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp.push(arr[i++]);
        else temp.push(arr[j++]);
    }

    while (i <= mid) temp.push(arr[i++]);
    while (j <= right) temp.push(arr[j++]);

    for (let k = 0; k < temp.length; k++) arr[left + k] = temp[k];
}