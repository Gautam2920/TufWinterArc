//Iterative Approach

function reverseList(head) {
    let current = head;

    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}