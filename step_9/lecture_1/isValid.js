function isValid(str) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (const ch of str) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (!stack.length || stack.pop() !== map[ch]) return false;
        }
    }
    return stack.length === 0;
}
