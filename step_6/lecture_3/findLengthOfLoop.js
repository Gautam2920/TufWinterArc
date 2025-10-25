function findLengthOfLoop(head) {
    if (!head || !head.next) return 0;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return this.getLoopLength(slow);
        }
    }

    return 0;
}

function getLoopLength(meetingPoint) {
    let temp = meetingPoint;
    let count = 1;

    while (temp.next !== meetingPoint) {
        temp = temp.next;
        count++;
    }

    return count;
}
