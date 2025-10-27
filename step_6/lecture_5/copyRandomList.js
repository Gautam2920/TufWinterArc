function copyRandomList(head) {
    if (!head) return null;

    let map = new Map();
    let curr = head;

    while (curr) {
        map.set(curr, { val: curr.val, next: null, random: null });
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        map.get(curr).next = curr.next ? map.get(curr.next) : null;
        map.get(curr).random = curr.random ? map.get(curr.random) : null;
        curr = curr.next;
    }

    return map.get(head);
}