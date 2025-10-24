function getLength(head) {
    let count = 0;
    let current = head;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}