function nextGreaterElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        const num = arr[i % n];
        while (stack.length && stack[stack.length - 1] <= num) {
            stack.pop();
        }
        if (i < n && stack.length) result[i] = stack[stack.length - 1];
        stack.push(num);
    }

    return result;
}
