function reverse(arr, n) {
    let left = 0;
    let right = n - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}