function sortStack(stack) {
    if (stack.length <= 1) return;
    let top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top);
}

function insertInSortedOrder(stack, val) {
    if (stack.length === 0 || stack[stack.length - 1] <= val) {
        stack.push(val);
        return;
    }
    let top = stack.pop();
    insertInSortedOrder(stack, val);
    stack.push(top);
}
