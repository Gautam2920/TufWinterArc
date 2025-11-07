function createStack() {
    const a = [];
    return {
        push(x) { a.push(x); },
        pop() { return a.length ? a.pop() : -1; },
        top() { return a.length ? a[a.length - 1] : -1; },
        isEmpty() { return a.length === 0; }
    };
}
