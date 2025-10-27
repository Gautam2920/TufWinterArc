function flattenLinkedList(head) {
    if (!head || !head.next) return head;

    head.next = flattenLinkedList(head.next);
    head = mergeTwoLists(head, head.next);
    return head;
}

function mergeTwoLists(a, b) {
    if (!a) return b;
    if (!b) return a;

    let result;
    if (a.val < b.val) {
        result = a;
        result.child = mergeTwoLists(a.child, b);
    } else {
        result = b;
        result.child = mergeTwoLists(a, b.child);
    }
    result.next = null;
    return result;
}