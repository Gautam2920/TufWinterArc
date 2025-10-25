function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = this.reverseList(slow);
    let firstHalf = head;

    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}
