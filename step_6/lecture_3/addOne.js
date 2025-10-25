function addOne(head) {
    const reverse = (node) => {
        let prev = null, curr = node;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    head = reverse(head);

    let curr = head, carry = 1;

    while (curr && carry) {
        let sum = curr.val + carry;
        curr.val = sum % 10;
        carry = Math.floor(sum / 10);

        if (!curr.next && carry) {
            curr.next = new ListNode(carry);
            carry = 0;
        }
        curr = curr.next;
    }

    return reverse(head);
}