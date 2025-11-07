let stack = [];
let minStack = [];

function push(val) {
    stack.push(val);
    if (!minStack.length || val <= minStack[minStack.length - 1]) {
        minStack.push(val);
    }
}

function pop() {
    if (!stack.length) return;
    const val = stack.pop();
    if (val === minStack[minStack.length - 1]) {
        minStack.pop();
    }
}

function top() {
    return stack.length ? stack[stack.length - 1] : -1;
}

function getMin() {
    return minStack.length ? minStack[minStack.length - 1] : -1;
}
