function reverseStack(stack) {
    if (stack.length <= 1) return;
    let top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
}

function insertAtBottom(stack, val) {
    if (stack.length === 0) {
        stack.push(val);
        return;
    }
    let top = stack.pop();
    insertAtBottom(stack, val);
    stack.push(top);
}
