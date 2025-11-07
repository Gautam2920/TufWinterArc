class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = null;

function push(x) {
    const node = new Node(x);
    node.next = head;
    head = node;
}

function pop() {
    if (!head) return -1;
    const v = head.val;
    head = head.next;
    return v;
}

function top() {
    return head ? head.val : -1;
}

function isEmpty() {
    return head === null;
}
