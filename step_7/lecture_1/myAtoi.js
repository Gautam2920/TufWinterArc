function  myAtoi(s) {
        s = s.trim();
    if (s.length === 0) return 0;

    let sign = 1, i = 0, result = 0;
    const INT_MAX = 2147483647, INT_MIN = -2147483648;

    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        if (sign * result >= INT_MAX) return INT_MAX;
        if (sign * result <= INT_MIN) return INT_MIN;
        i++;
    }

    return sign * result;
    }