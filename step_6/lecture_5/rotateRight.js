function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;

    let len = 1, tail = head;
    while (tail.next) {
        tail = tail.next;
        len++;
    }

    k = k % len;
    if (k === 0) return head;

    tail.next = head;

    let stepsToNewHead = len - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) newTail = newTail.next;

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
}
