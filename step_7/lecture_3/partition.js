function partition(s) {
    const res = [];
    const path = [];

    function isPalindrome(str, l, r) {
        while (l < r) {
            if (str[l++] !== str[r--]) return false;
        }
        return true;
    }

    function backtrack(index) {
        if (index === s.length) {
            res.push([...path]);
            return;
        }

        for (let i = index; i < s.length; i++) {
            if (isPalindrome(s, index, i)) {
                path.push(s.substring(index, i + 1));
                backtrack(i + 1);
                path.pop();
            }
        }
    }

    backtrack(0);
    return res;
}
