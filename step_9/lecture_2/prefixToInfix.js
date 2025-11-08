function prefixToInfix(s) {
    const stack = [];
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];
        if (/[a-z0-9]/.test(ch)) {
            stack.push(ch);
        } else {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(`(${a}${ch}${b})`);
        }
    }
    return stack.pop();
}
