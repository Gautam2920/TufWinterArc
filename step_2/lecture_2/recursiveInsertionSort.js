function insertionSort(nums, n = nums.length) {
    if (n <= 1) return nums;

    insertionSort(nums, n - 1);

    let last = nums[n - 1];
    let j = n - 2;

    while (j >= 0 && nums[j] > last) {
        nums[j + 1] = nums[j];
        j--;
    }

    nums[j + 1] = last;

    return nums;
}
