function reverseKGroup(head, k) {
    if (!head || k <= 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;

    while (true) {
        let kth = getKthNode(prevGroupEnd, k);
        if (!kth) break;
        let groupStart = prevGroupEnd.next;
        let nextGroupStart = kth.next;

        let prev = kth.next, curr = groupStart;
        while (curr !== nextGroupStart) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        prevGroupEnd.next = kth;
        prevGroupEnd = groupStart;
    }

    return dummy.next;
}

function getKthNode(node, k) {
    while (node && k > 0) {
        node = node.next;
        k--;
    }
    return node;
}
