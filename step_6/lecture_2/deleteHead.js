function deleteHead(head) {
    if (!head) return null;
    head = head.next;
    if (head) head.prev = null;
    return head;
}