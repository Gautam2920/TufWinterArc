function insertBeforeHead(head, X) {
    const newNode = { val: X, next: head, prev: null };
    if (head) head.prev = newNode;
    return newNode;
}