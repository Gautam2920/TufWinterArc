function removeDuplicates(head) {
    if (!head) return head;
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            let nextNode = curr.next.next;
            curr.next = nextNode;
            if (nextNode) nextNode.prev = curr;
        } else {
            curr = curr.next;
        }
    }
    return head;
}