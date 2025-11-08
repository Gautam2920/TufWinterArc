let q = [], f = 0;

function initQueue() {
    q = [];
    f = 0;
}
function push(x) {
    q.push(x);
}
function pop() {
    if (f >= q.length) return -1;
    const v = q[f++];
    if (f > 64 && f * 2 > q.length) { q = q.slice(f); f = 0; }
    return v;
}
function peek() {
    return f >= q.length ? -1 : q[f];
}
function isEmpty() {
    return f >= q.length;
}
