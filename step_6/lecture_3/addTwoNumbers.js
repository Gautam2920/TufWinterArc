function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0),
        curr = dummy,
        carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
}