function postfixToInfix(postfix) {
    const stack = [];
    for (let ch of postfix) {
        if (/[a-z0-9]/.test(ch)) {
            stack.push(ch);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(`(${a}${ch}${b})`);
        }
    }
    return stack.pop();
}
