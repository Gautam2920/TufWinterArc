function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
}