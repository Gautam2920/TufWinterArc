function findPairsWithGivenSum(head, target) {
    let res = [];
    if (!head) return res;

    let left = head, right = head;
    while (right.next) right = right.next;

    while (left !== right && right.next !== left) {
        let sum = left.val + right.val;
        if (sum === target) {
            res.push([left.val, right.val]);
            left = left.next;
            right = right.prev;
        } else if (sum < target) {
            left = left.next;
        } else {
            right = right.prev;
        }
    }
    return res;
}