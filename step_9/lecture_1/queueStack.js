let q = [];

function push(x) {
    q.push(x);
    for (let i = 0; i < q.length - 1; i++) {
        q.push(q.shift());
    }
}

function pop() {
    return q.length ? q.shift() : -1;
}

function top() {
    return q.length ? q[0] : -1;
}

function isEmpty() {
    return q.length === 0;
}
