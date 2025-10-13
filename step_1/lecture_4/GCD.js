function GCD(n1, n2) {
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);

    if (n1 === 0) return n2;
    if (n2 === 0) return n1;

    while (n2 !== 0) {
        const temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }

    return n1;
}
