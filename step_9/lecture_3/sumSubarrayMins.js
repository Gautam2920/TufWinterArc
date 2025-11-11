function sumSubarrayMins(arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;
    const left = new Array(n);
    const right = new Array(n);
    const stack1 = [];
    const stack2 = [];

    for (let i = 0; i < n; i++) {
        while (stack1.length && arr[stack1[stack1.length - 1]] > arr[i]) {
            stack1.pop();
        }
        left[i] = stack1.length === 0 ? i + 1 : i - stack1[stack1.length - 1];
        stack1.push(i);
    }

    for (let i = n - 1; i >= 0; i--) {
        while (stack2.length && arr[stack2[stack2.length - 1]] >= arr[i]) {
            stack2.pop();
        }
        right[i] = stack2.length === 0 ? n - i : stack2[stack2.length - 1] - i;
        stack2.push(i);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = (ans + arr[i] * left[i] * right[i]) % MOD;
    }

    return ans;
}
