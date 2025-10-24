function searchKey(head, key) {
    let current = head;
    while (current) {
        if (current.val === key) return true;
        current = current.next;
    }
    return false;
}