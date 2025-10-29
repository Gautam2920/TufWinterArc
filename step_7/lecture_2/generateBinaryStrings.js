function generateBinaryStrings(n) {
    let res = [];
    helper("", n, res);
    return res;
}

function helper(curr, n, res) {
    if (curr.length === n) {
        res.push(curr);
        return;
    }

    helper(curr + '0', n, res);
    if (curr.length === 0 || curr[curr.length - 1] !== '1')
        helper(curr + '1', n, res);
}
