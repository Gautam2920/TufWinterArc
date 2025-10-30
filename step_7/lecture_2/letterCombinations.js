function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const res = [];
    backtrack(0, "", digits, map, res);
    return res;
}

function backtrack(index, curr, digits, map, res) {
    if (index === digits.length) {
        res.push(curr);
        return;
    }

    const letters = map[digits[index]];
    for (let ch of letters) {
        backtrack(index + 1, curr + ch, digits, map, res);
    }
}
