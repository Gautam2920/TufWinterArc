function addOperators(s, target) {
    const res = [];

    function backtrack(index, path, value, prev) {
        if (index === s.length) {
            if (value === target) res.push(path);
            return;
        }

        for (let i = index; i < s.length; i++) {
            if (i > index && s[index] === "0") break;

            const currStr = s.slice(index, i + 1);
            const currNum = Number(currStr);

            if (index === 0) {
                backtrack(i + 1, currStr, currNum, currNum);
            } else {
                backtrack(i + 1, path + "+" + currStr, value + currNum, currNum);
                backtrack(i + 1, path + "-" + currStr, value - currNum, -currNum);
                backtrack(
                    i + 1,
                    path + "*" + currStr,
                    value - prev + prev * currNum,
                    prev * currNum
                );
            }
        }
    }

    backtrack(0, "", 0, 0);
    return res;
}
