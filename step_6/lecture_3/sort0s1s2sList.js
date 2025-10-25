function sort012List(head) {
    if (!head || !head.next) return head;

    let zeroD = new ListNode(0), oneD = new ListNode(0), twoD = new ListNode(0);
    let zero = zeroD, one = oneD, two = twoD, curr = head;

    while (curr) {
        if (curr.val === 0) { zero.next = curr; zero = zero.next; }
        else if (curr.val === 1) { one.next = curr; one = one.next; }
        else { two.next = curr; two = two.next; }
        curr = curr.next;
    }
    zero.next = oneD.next ? oneD.next : twoD.next;
    one.next = twoD.next;
    two.next = null;

    return zeroD.next;
}
