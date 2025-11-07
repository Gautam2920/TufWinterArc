class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let front = null, rear = null;

function push(x) {
    const node = new Node(x);
    if (!rear) {
        front = rear = node;
    } else {
        rear.next = node;
        rear = node;
    }
}

function pop() {
    if (!front) return -1;
    const v = front.val;
    front = front.next;
    if (!front) rear = null;
    return v;
}

function peek() {
    return front ? front.val : -1;
}

function isEmpty() {
    return front === null;
}
