function removeOuterParentheses(s) {
    let result = "";
    let count = 0;

    for (let ch of s) {
        if (ch === "(") {
            if (count > 0) result += "(";
            count++;
        } else {
            count--;
            if (count > 0) result += ")";
        }
    }

    return result;
}