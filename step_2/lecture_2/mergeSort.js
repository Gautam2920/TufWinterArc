function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);

    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
