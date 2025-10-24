//Recursive Approach

function reverseList(head) {
    if (!head || !head.next) return head;

    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}
