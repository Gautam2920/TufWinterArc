function largeOddNum(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        const digit = s.charCodeAt(i) - 48;
        if (digit % 2 === 1) {
            const res = s.slice(0, i + 1).replace(/^0+/, "");
            return res;
        }
    }
    return "";
}