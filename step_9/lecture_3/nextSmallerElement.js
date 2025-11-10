function nextSmallerElement(arr) {
    const n = arr.length;
    const stack = [];
    const result = new Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        if (stack.length) result[i] = stack[stack.length - 1];
        stack.push(arr[i]);
    }

    return result;
}
