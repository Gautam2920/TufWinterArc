function secondLargestElement(nums) {
    if (nums.length < 2) return -1;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
}