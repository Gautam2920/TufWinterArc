function deleteAllOccurrences(head, target) {
    let curr = head;
    while (curr) {
        if (curr.val === target) {
            if (curr.prev) curr.prev.next = curr.next;
            else head = curr.next;
            if (curr.next) curr.next.prev = curr.prev;
        }
        curr = curr.next;
    }
    return head;
}