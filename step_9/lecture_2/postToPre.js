function postToPre(postfix) {
    const stack = [];
    for (let ch of postfix) {
        if (/[a-z]/.test(ch)) {
            stack.push(ch);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ch + a + b);
        }
    }
    return stack.pop();
}