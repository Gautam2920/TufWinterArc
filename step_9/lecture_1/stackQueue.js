let s1 = [];
let s2 = [];

function push(x) {
    s1.push(x);
}

function pop() {
    if (!s2.length) {
        while (s1.length) s2.push(s1.pop());
    }
    return s2.length ? s2.pop() : -1;
}

function peek() {
    if (!s2.length) {
        while (s1.length) s2.push(s1.pop());
    }
    return s2.length ? s2[s2.length - 1] : -1;
}

function isEmpty() {
    return s1.length === 0 && s2.length === 0;
}
